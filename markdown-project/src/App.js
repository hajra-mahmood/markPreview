
import './App.scss';
import {marked} from 'marked';
import {useState} from 'react'

marked.setOptions({
  breaks: true
});

function App() {
  const [text, setText] = useState(`
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![A cat with a trolley](https://i.pinimg.com/originals/77/7a/3c/777a3c4d6d32327470ef548ae2be7082.png)
`)
  return (
    <div className="App">
      <h1 class = "heading">My Markdown Previewer</h1>
      <div className = "divs editor">
<div className = "editor-top"><i class="fa-solid fa-cat"></i>   Editor </div>
<div className = "editor-bottom"><textarea id = "editor"className = "textarea" value = {text} onChange = {(event) => setText(event.target.value)}></textarea></div>

      </div>
      <div className = "divs preview" >
<div className = "preview-top"><i class="fa-solid fa-cat"></i>   Preview</div>
<div id = "preview" className = "preview-bottom" dangerouslySetInnerHTML= {{__html : marked(text)}}></div>
      </div>
 
    </div>
  );
}

export default App;
