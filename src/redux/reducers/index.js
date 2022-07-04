import { combineReducers } from 'redux'
import user from './user';
import matches from './matches';

export default combineReducers({
    user,
    matches
})