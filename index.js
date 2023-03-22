// JSDOM SETUP -- IGNORE
const JSDOM = require("jsdom").JSDOM;
const document = new JSDOM('<body></body>').window.document;

// Sup

//  INSTRUCTIONS

//  1) Please ask clarifying questions. This is meant to be a collaborative exercise!
//  2) You can refer to documentation if you need. Just tell us what you're looking for.
//  3) We care more about your thought process than producing a working solution. We encourage you to speak through what you are thinking.
//  4) You can also ask for time to concentrate on getting an idea out in code.



//  Step 1: Create a JSON data structure that is capable of storing this sample HTML:

//    <h2>What do you think of this code?</h2>
//    <p>Testing this <i>code</i> out.</p>


let htmlStructure = [
  {
    tag: 'h2',
    content: 'What do you think of this code?'
  },
  {
    tag: 'p',
    content: [
      {
        content: 'Testing this '
      },
      {
        tag: 'i',
        content: 'code'
      },
      {
        content: 'out.'
      },
    ]
  }
];


//  Step 2: Write code to take your data structure and render it to the DOM.
//  You can utilize the following methods to assist you:

//    document.createElement(tag: string): HTMLElement
//    document.createTextNode(text: string): TextNode
//    [HTMLElement | document.body].appendChild(child: HTMLElement | TextNode): void


/*
 * @param {object} data structure from Step 1
 * @returns void
*/

function renderNodes(htmlStructure, parent) {
  if (typeof htmlStructure === "string") {
    const element = document.createTextNode(htmlStructure);
    parent.appendChild(element);
    return;
  }

  if (Array.isArray(htmlStructure)) {
    for (const element of htmlStructure) {
      renderNodes(element, parent);
    }
    return;
  }

  const { tag, content } = htmlStructure;
  if (tag) {
    const element = document.createElement(tag);
    renderNodes(content, element);
    parent.appendChild(element);
  } else {
    renderNodes(content, parent);
  }
}





// CONSOLE OUTPUT (IGNORE)

console.log('htmlStructure: ',  htmlStructure)
console.log('renderNodes(): ',  renderNodes(htmlStructure, document.body), '\n')
console.log(document.body.innerHTML)
