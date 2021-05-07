import { combineReducers } from 'redux';

// 发现/推荐
import leftNav from './leftNav_reducers';
import recommendSongList from './recommend/recommendSongList';
import vipSongList from './recommend/vipSongList'
import newestSongList from './recommend/newestSongList';
import recommendMV from './recommend/recommenMV';
import radioAnchor from './recommend/radioAnchor';

// 发现/歌单
import songType from './songList/songType';
import songList from './songList/songList';
import songCategory from './songList/songCategory'

export default combineReducers({
    leftNav,
    recommendSongList,
    vipSongList,
    newestSongList,
    recommendMV,
    radioAnchor,
    
    songType,
    songList,
    songCategory
})