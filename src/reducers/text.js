export default (state = {}, action) => {
    switch (action.type) {
        case 'SELECT_HIGHLIGHT_TEXT':
            return {...state, highlight_text: action.text}
        default:
            return state
    }
}