import React from 'react'
import { connect } from 'react-redux'
import Block from './Block'
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
      <Block
        key={block.id}
        id={block.id}
        code={block.code}
        highlight_text = {highlight_text}
        removeBlock ={removeBlock}
        selectHighlightText = {selectHighlightText}
      />
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