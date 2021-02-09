import leftNav from './leftNav_reducers';
import recommend from './recommend_reducers'
import { combineReducers } from 'redux';

export default combineReducers({
    leftNav,
    recommend,
})