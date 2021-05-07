import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../../common/Header';
import BreadCrumb from '../../../common/BreadCrumb';
import * as songTypeActionCreators from '../../../../actions/songList/actionCreators';
import Songs from '../../../common/Songs';
import { createPortal } from 'react-dom';

import chooseImg from '../../../../img/setting.svg';
import './index.sass'

const CateSub = ({ name }) => {
    return <button>{name}</button>
}

const Sub = ({ category, categoryList }) => {
    console.log(' categoryList',  categoryList)
    return (
        <div>
            <div>{category}</div>
            {
                categoryList.map(cate => {
                    return <CateSub 
                        key={cate.id}
                        {...cate}
                    />
                })
            }
        </div>
    );
}

const Children = ({ list }) => {
    console.log('cate->', list)
    return (
        <div>
            <p>全部歌单</p>
            {
                list.map(item => {
                    return <sub 
                        key={item.category}
                        {...item}
                    />
                })
            }
        </div>
    )
}

const SongTypeModal = ({ list }) => {
    return createPortal(
        <Children list={list} />,
        document.getElementById('root')
    );
};

const SongList = (props) => {
    console.log('songlist props', props)
    const { type, changeSongType, songList, songCategory } = props;
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
            <Songs
                list={songList}
                gridStyle="song_list_grid"
            />

            <SongTypeModal list={songCategory} />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { songType: {
        type
    }, songList, songCategory } = state;
    return {
        type,
        songList,
        songCategory
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators(songTypeActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)