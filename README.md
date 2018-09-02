# Interactive JavaScript Console
An interactive JavaScript console to use on your blog. Inspired by [thebookofshaders.com](https://thebookofshaders.com/).

## Getting Started

To install the editor, you first have to include the js file `dist/bundle.js` in the head of your website, and then add the following wherever you want an interactive code sample:

```html
<interactive-console style="display: none">
    <div class="controls">
        <button class="execute">Execute</button>
        <button class="reset">Clear Output</button>
    </div>
    <div class="code">
        <textarea>console.log('hey')</textarea>
    </div>
    <div class="output"></div>
</interactive-console>
```

On page load, this will get transformed to look like this:

![code sample](https://raw.githubusercontent.com/bennetthardwick/interactive-javascript-console/master/images/interactive-console.png "Interactive Code Sample")

You can view an example by running the command: `npm start` and then navigating to `localhost:9000`.

## Built With
- [Code Mirror](https://codemirror.net/)
