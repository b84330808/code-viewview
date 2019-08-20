import {combineReducers} from 'redux';
import blocks from './blocks';
import text from './text';
export default combineReducers({
    blocks,
    text
});