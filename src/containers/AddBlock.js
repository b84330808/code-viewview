import React from 'react'
import { connect } from 'react-redux'
import { addBlock } from '../actions'

const AddBlock = ({ dispatch }) => {

  return (
    <div>
        <button onClick={()=>dispatch(addBlock())}>
          Add Block
        </button>
    </div>
  )
}

export default connect()(AddBlock)
