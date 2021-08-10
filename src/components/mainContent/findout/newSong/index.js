/**
 * module 发现/新歌
 */
import React from 'react';
import Toptab from './TopTab';
import NewPostSong from './NewPostSong';
import NewAlbum from './NewAlbum';
import { connect } from 'react-redux'
import {
    Switch,
    Route,
    useHistory
} from 'react-router-dom';
import {new_song_container} from './index.module.sass';

const NewSong = ({ newestSongList }) => {
    const rootPath = '/findout/new';
    const tabList = [{
        desc: '新歌速递',
        id: 0,
        active: true,
        path: `${rootPath}/song`
    }, {
        desc: '新碟上架',
        id: 1,
        active: false,
        path: `${rootPath}/album`
    }]

    return (
        <div className={new_song_container}>
             {/* 顶部导航 */}
            <Toptab tabList={tabList}/>

            <Switch>
                <Route exact path={rootPath}>
                    <NewPostSong songList={newestSongList.list} />
                </Route>
                <Route path={`${rootPath}/song`}>
                    <NewPostSong songList={newestSongList.list} />
                </Route>
                <Route path={`${rootPath}/album`}>
                    <NewAlbum />
                </Route>
            </Switch>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { 
        newestSongList
    } = state;

    return {
        newestSongList
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewSong)