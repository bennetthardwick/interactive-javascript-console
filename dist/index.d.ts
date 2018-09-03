import "../node_modules/codemirror/mode/javascript/javascript";
import "./style.scss";
export declare class InteractiveConsole {
    private readonly textarea;
    private readonly execute;
    private readonly reset;
    private readonly output;
    private readonly document;
    private editor;
    private frame;
    constructor(textarea: HTMLTextAreaElement, execute: HTMLButtonElement, reset: HTMLButtonElement, output: HTMLDivElement, document: Document);
    run(): void;
    private log;
    private error;
    private resultToConsole;
    private alert;
}
