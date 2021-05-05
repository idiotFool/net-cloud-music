import React from 'react';
import { connect } from 'react-redux';
import Tabfn from '../common/tabFn';
import './index.sass'

const MainContent = () => {
    // const tabItems = [{
    //     tabName: '推荐',
    //     id: 'tab_0'
    // }, {
    //     tabName: '歌单',
    //     id: 'tab_1'
    // },{
    //     tabName: '电台',
    //     id: 'tab_2'
    // },{
    //     tabName: '排行榜',
    //     id: 'tab_3'
    // },{
    //     tabName: '新歌',
    //     id: 'tab_4'
    // }];

    // <Tabfn tabItems={tabItems} initActiveId={tabItems[0].id} />
    return (
        <div className="main_content_container">

        </div>
    )
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);