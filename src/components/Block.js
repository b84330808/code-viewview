import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import './Block.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/theme/neat.css';
import 'codemirror/mode/xml/xml.js';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/search/searchcursor.js';
import 'codemirror/addon/search/match-highlighter.js';

let options = {
  mode: 'javascript',
  theme: 'material',
  lineNumbers: true,
  highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true}
}


class Block extends React.Component {
  constructor(props) {
    super(props);
    this.editor_instance = null;
    this.markers = [];
  }

  selectText(text){
    let cursor = this.editor_instance.getSearchCursor(text, false)
    while (cursor.findNext()) {
      let mark = this.editor_instance.markText(cursor.from(), cursor.to(), {
        className: 'cm-matchhighlighted-by-other'
      });
      this.markers.push(mark)
    }
  }

  clearSelection(){
    this.markers.forEach(marker => marker.clear());
  }

  componentDidUpdate(prevProps) {
    if (prevProps.highlight_text !== this.props.highlight_text) {
        this.clearSelection()
      if(this.props.highlight_text)
        this.selectText(this.props.highlight_text)
    }
  }

  render() {
    return (
      <div className="container">
        <div className="title" contenteditable="true" spellcheck="false">title</div>
        <CodeMirror
          value={this.props.code}
          options={options}
          editorDidMount={editor => { this.editor_instance = editor }}
          onBeforeChange={(editor, data, value) => {
            // this.setState({value});
          }}
          onChange={(editor, value) => {
            console.log('controlled', {value});
          }}
          onDblClick={(editor)=>{
            let selectedText = editor.getSelection();
            this.props.selectHighlightText(selectedText);
            
          }}
        />
        <button className="close-button" onClick={()=>this.props.removeBlock(this.props.id)}>X</button>
      </div>
    )
  }
}

export default Block