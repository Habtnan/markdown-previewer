import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { marked } from "https://esm.sh/marked";


const defaultMarkdown = `# Welcome to my Markdown Previewer!

## This is a sub-heading!

[Learn more about Markdown](https://www.markdownguide.org/)

Inline code: \`const x = 10;\`

\`\`\`
// This is a code block
function helloWorld() {
  console.log("Hello, World!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote

![Image](https://via.placeholder.com/150)

**This text is bold**`;

document.getElementById('editor').value = defaultMarkdown;
document.getElementById('preview').innerHTML = marked(defaultMarkdown);

document.getElementById('editor').addEventListener('input', event => {
  const markdownText = event.target.value;
  document.getElementById('preview').innerHTML = marked(markdownText);
});