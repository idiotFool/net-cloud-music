import { combineReducers } from 'redux';

import leftNav from './leftNav_reducers';
import recommendSongList from './recommendSongList';
import vipSongList from './vipSongList'
import newestSongList from './newestSongList';
import recommendMV from './recommenMV';
import radioAnchor from './radioAnchor';

export default combineReducers({
    leftNav,
    recommendSongList,
    vipSongList,
    newestSongList,
    recommendMV,
    radioAnchor
})