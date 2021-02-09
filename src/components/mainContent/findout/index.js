import React from 'react';
import TabFn from '../../common/tabFn';
import './index.css';

const tabItems = [{
    tabName: '推荐',
    id: 'tab_0'
}, {
    tabName: '歌单',
    id: 'tab_1'
},{
    tabName: '电台',
    id: 'tab_2'
},{
    tabName: '排行榜',
    id: 'tab_3'
},{
    tabName: '新歌',
    id: 'tab_4'
}];
const Findout = (props) => {
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
            { props.children }
        </div>
    )
};

export default Findout;