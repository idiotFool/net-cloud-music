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
import './index.sass';

export default function Findout() {
    const { path, url } = useRouteMatch();
    console.log(path, url)
    const tabItems = [{
        tabName: '推荐',
        id: 'tab_0',
        path: `${url}/recommend`
    }, {
        tabName: '歌单',
        id: 'tab_1',
        path: `${url}/songList`
    },{
        tabName: '电台',
        id: 'tab_2',
        path: `${url}/radio`
    },{
        tabName: '排行榜',
        id: 'tab_3',
        path: `${url}/ranks`
    },{
        tabName: '新歌',
        id: 'tab_4',
        path: `${url}/new`
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
                    <div className="search-text">
                        <i></i>
                        <span>搜索</span>
                    </div>
                </div>
            </div>
            
            <Switch>
                <Route exact path={path}>
                    <Recommend />
                </Route>
                <Route path={`${path}/recommend`}>
                    <Recommend />
                </Route>
                <Route path={`${path}/songList`}>
                    <SongList />
                </Route>
                <Route path={`${path}/radio`}>
                    <RadioStation />
                </Route>
                <Route path={`${path}/ranks`}>
                    <Ranks />
                </Route>
                <Route path={`${path}/new`}>
                    <NewSong />
                </Route>
            </Switch>
        </div>
    )
};