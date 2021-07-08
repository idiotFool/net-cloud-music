/**
 * module 【发现】
 */
import React from 'react';
import TabFn from '../../common/tabFn';
import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import Recommend from './recommend';
import SongList from './songList';
import RadioStation from './radioStation';
import Ranks from './ranks';
import NewSong from './newSong';
import Serach from '../../common/Search';
import './index.sass';

export default function Findout() {
    const { path, url } = useRouteMatch();
    const pathRoot = '/findout';
    const tabItems = [{
        tabName: '推荐',
        id: 'tab_0',
        path: `${pathRoot}/recommend`
    }, {
        tabName: '歌单',
        id: 'tab_1',
        path: `${pathRoot}/songList`
    },{
        tabName: '电台',
        id: 'tab_2',
        path: `${pathRoot}/radio`
    },{
        tabName: '排行榜',
        id: 'tab_3',
        path: `${pathRoot}/ranks`
    },{
        tabName: '新歌',
        id: 'tab_4',
        path: `${pathRoot}/new`
    }];

    return (
        <div>
            <div className="findout-header">
                <div className="tab-wrapper">
                    <TabFn
                        tabItems={tabItems}
                        initActiveId={tabItems[0].id}
                        styleProps={{height: '36px'}}
                    />
                </div>
                <div className="search-btn">
                    <Serach />
                </div>
            </div>
            
            <Switch>
                <Route exact path="/">
                    <Recommend />
                </Route>
                <Route exact path={pathRoot}>
                    <Recommend />
                </Route>
                <Route path={`${pathRoot}/recommend`}>
                    <Recommend />
                </Route>
                <Route path={`${pathRoot}/songList`}>
                    <SongList />
                </Route>
                <Route path={`${pathRoot}/radio`}>
                    <RadioStation />
                </Route>
                <Route path={`${pathRoot}/ranks`}>
                    <Ranks />
                </Route>
                <Route path={`${pathRoot}/new`}>
                    <NewSong />
                </Route>
            </Switch>
        </div>
    )
};