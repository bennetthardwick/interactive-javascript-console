import { fromTextArea } from "codemirror";
import "../node_modules/codemirror/mode/javascript/javascript";
import "./style.scss";

document.addEventListener("DOMContentLoaded", () => {

		function transformTabs(text: string) {

			function countTabs(text: string): number | undefined {
				 let count = 0;
				 for (let i = 0; i < text.length; i++) {
					 if (text[i] === '\t' || text[i] === '\s') {
						 count++;
					 } else break;
				 }
				 if (count === text.length - 1) return undefined;
				 else return count;
			}

			console.log(text.split('\n'))

			const array = text.split('\n')
												.filter(x => !!x)
												.map(x => countTabs(x))
												.filter(x => x !== undefined)

			console.log(array);

			const tabCount = Math.min.apply(
				null, 
				array
			);
			
			console.log(tabCount);

		}

    Array.from(document.querySelectorAll("interactive-console")).forEach((interactive) => {

        console.log("wow");

				const controls = document.createElement('div');
				controls.className = 'controls';

				const execute = document.createElement('button');
				execute.innerText = 'Run';
				execute.className = 'execute';

				const reset = document.createElement('button');
				reset.innerText = 'Clear Output';
				reset.className = 'reset';

				controls.appendChild(execute);
				controls.appendChild(reset);

				const code = document.createElement('div');
				code.className = 'code';

        const textarea = document.createElement('textarea');

				transformTabs((interactive as HTMLElement).innerHTML);

				textarea.innerHTML = (interactive as HTMLElement).innerHTML.trim(); 

				code.appendChild(textarea);

				const output = document.createElement('div');
				output.className = 'output';

				(interactive as HTMLElement).innerHTML = '';

				interactive.appendChild(controls);
				interactive.appendChild(code);
				interactive.appendChild(output);

        if (!textarea) { throw Error("Could not find text area!"); }
        if (!execute) { throw Error("Could not find execute button!"); }
        if (!reset) { throw Error("Could not find reset button!"); }
        if (!output) { throw Error("Could not found output!"); }

        (interactive as HTMLElement).style.display = "block";

        new InteractiveConsole(
            textarea,
            execute,
            reset,
            output,
            document,
        );

    });
});

type OutputType = "error" | "log" | "return";

interface ConsoleOutput {
    text?: string;
    log?: any;
    return?: any;
    type: OutputType;
}

export class InteractiveConsole {

    private editor: CodeMirror.Editor;
    private frame: HTMLIFrameElement;

    constructor(
        private readonly textarea: HTMLTextAreaElement,
        private readonly execute: HTMLButtonElement,
        private readonly reset: HTMLButtonElement,
        private readonly output: HTMLDivElement,
        private readonly document: Document,
    ) {
        this.editor = fromTextArea(this.textarea, {
            lineNumbers: true,
            theme: "gruvbox-dark",
        });

        this.frame = this.document.createElement("iframe");
        this.frame.style.display = "none";

        this.document.body.appendChild(this.frame);

        (this.frame.contentWindow!.console as any) = {
            log: (...args: any[]) => this.log(args.join(" ")),
            error: (...args: any[]) => this.error(args.join(" ")),
        };

        (this.frame.contentWindow!.alert) = this.alert;

        this.execute.addEventListener("click", () => {
            this.output.innerHTML = "";

            try {
                this.resultToConsole({
                    return: (this.frame.contentWindow as any).eval(this.editor.getValue()),
                    type: "return",
                });
            } catch (e) {
                this.resultToConsole({
                    log: e.message,
                    type: "error",
                });
            }
        });

        this.reset.addEventListener("click", () => {
            this.output.innerHTML = "";
        });

    }

    private log(log: string): void {
        this.resultToConsole({
            log,
            type: "log",
        });
    }

    private error(log: string): void {
        this.resultToConsole({
            log,
            type: "error",
        });
    }

    private resultToConsole(output: ConsoleOutput): void {

        const result = this.document.createElement("div");
        result.className = output.type;

        const type = this.document.createElement("span");
        type.className = "type";

        const o = this.document.createElement("span");

        function typeToIcon(type: string): string {
            switch (type) {
                case "return":
                return "&nbsp;";
                case "error":
                return "⮾";
                case "log":
                default:
                return "🛈";
            }

        }

        type.innerHTML = typeToIcon(output.type);

        function createUndefined() {
            o.className = "undefined";
            return "undefined";
        }

        switch (output.type) {
            case "error":
                o.innerText = output.log || createUndefined();
                break;
            case "log":
                o.innerText = output.log || createUndefined();
                break;
            case "return":
                o.innerText = output.return || createUndefined();
                break;
            default:
            break;
        }

        result.appendChild(type);
        result.appendChild(o);

        this.output.appendChild(result);

    }

    private alert(message: string): void {
        console.log("Alert:", message);
    }

}
