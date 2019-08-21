import React from 'react'
import { connect } from 'react-redux'
import Block from './Block'

import { ResizableBox } from 'react-resizable';
import './react-resizable.css';
import { removeBlock } from '../actions'
import { selectHighlightText } from '../actions'

const style = {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '30px'
};
const BlockList = ({ blocks, highlight_text, removeBlock, selectHighlightText }) => (
  <div style={style}>
    
    
    {blocks.map(block =>
      <ResizableBox key={block.id} width={500} height={300} minConstraints={[150, 150]}>
        <Block
          
          id={block.id}
          code={block.code}
          highlight_text = {highlight_text}
          removeBlock ={removeBlock}
          selectHighlightText = {selectHighlightText}
        />
      </ResizableBox>
    )}
  </div>
)

const mapStateToProps = state => ({
    blocks: state.blocks,
    highlight_text: state.text.highlight_text
})
  
const mapDispatchToProps = dispatch => ({
    removeBlock: id => dispatch(removeBlock(id)),
    selectHighlightText: text => dispatch(selectHighlightText(text))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockList)