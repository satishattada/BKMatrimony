import { combineReducers } from 'redux'
import user from './user';
import matches from './matches';
import food from './food';

export default combineReducers({
    user,
    matches,
    food
})