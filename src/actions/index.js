export const addBlock = () => ({
    type: 'ADD_BLOCK',
    id: new Date().getTime()
})

export const removeBlock = id => ({
    type: 'REMOVE_BLOCK',
    id
})

export const selectHighlightText = text =>({
    type: 'SELECT_HIGHLIGHT_TEXT',
    text: text
})