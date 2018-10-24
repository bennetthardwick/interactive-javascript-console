# Interactive JavaScript Console
An interactive JavaScript console to use on your blog. Inspired by [thebookofshaders.com](https://thebookofshaders.com/). View it in action [here](https://bennetthardwick.com/2018/09/03/interactive-javascript-console-for-jekyll.html)

## Getting Started

To install the editor, you first have to include the js file `dist/bundle.js` in the head of your website, and then add the following wherever you want an interactive code sample:

```html
<interactive-console>
    console.log('hey');
    function hello() {
        console.log('hi');
    }
    setTimeout(hello, 600);
</interactive-console>
```

On page load, this will get transformed to look like this:

![code sample](https://raw.githubusercontent.com/bennetthardwick/interactive-javascript-console/master/images/interactive-console.png "Interactive Code Sample")

You can view an example by running the command: `npm start` and then navigating to `localhost:9000`.

## Built With
- [Code Mirror](https://codemirror.net/)
