import React from 'react';
import { 
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom'
import TabFn from '../../common/tabFn';
import Search from '../../common/Search'

import Supreme from './supreme'
import NetOnly from './netOnly'
import AllMvs from './allMvs'
import {
    findout_header,
    tab_wrapper,
    search_btn
} from './index.module.sass'

export default function MusicVideo() {
    const { path, url } = useRouteMatch();
    const pathRoot = '/mv';
    const tabItems = [{
        tabName: 'MV精选',
        id: 'tab_mv_0',
        path: `${pathRoot}/supreme`
    }, {
        tabName: '网易独家',
        id: 'tab_mv_1',
        path: `${pathRoot}/netOnly`
    },{
        tabName: '全部MV',
        id: 'tab_mv_2',
        path: `${pathRoot}/all`
    }];

    return (
        <div>
            <div className={findout_header}>
                <div className={tab_wrapper}>
                    <TabFn
                        tabItems={tabItems}
                        initActiveId={tabItems[0].id}
                        styleProps={{height: '36px'}}
                    />
                </div>
                <div className={search_btn}>
                    <Search />
                </div>
            </div>

            <Switch>
                <Route exact path="/">
                    <Supreme />
                </Route>
                <Route exact path={pathRoot}>
                    <Supreme />
                </Route>
                <Route path={`${pathRoot}/supreme`}>
                    <Supreme />
                </Route>
                <Route path={`${pathRoot}/netOnly`}>
                    <NetOnly />
                </Route>
                <Route path={`${pathRoot}/all`}>
                    <AllMvs />
                </Route>
            </Switch>
        </div>
    )
};