import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../../common/Header';
import BreadCrumb from '../../../common/BreadCrumb';
import * as songTypeActionCreators from '../../../../actions/songList/actionCreators';
import RecommendList  from '../recommend/RecommendList';
import chooseImg from '../../../../img/setting.svg';
import './index.sass'

const SongList = (props) => {
    console.log('songlist props', props)
    const { type, changeSongType, songList } = props;
    const tabItems = [{
        tabName: '华语',
        id: 0
    }, {
        tabName: '流行',
        id: 1
    },{
        tabName: '摇滚',
        id: 2
    },{
        tabName: '民谣',
        id: 3
    },{
        tabName: '电子',
        id: 4
    }];
    const handleClick = (currentTab) => {
        changeSongType(currentTab);
    }

    return (
        <div className="content_wrapper">
            <Header 
                isShowI={true}
                title={type}
                render={() => {
                    return (
                        <div className="header_right_render">
                            <BreadCrumb 
                                tabItems={tabItems}
                                clickHandler={handleClick}
                            />
                            <button className="choose_type">
                                <img src={chooseImg} alt="" />
                                <label>选择分类</label>
                            </button>
                        </div>
                    );
                }}
            />

            {/* 内容展示区域 */}
        </div>
    );
}

const mapStateToProps = (state) => {
    const { songType: {
        type
    }, songList } = state;
    return {
        type,
        songList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(songTypeActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)