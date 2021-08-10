/**
 * module 发现/歌单
 */
import React, { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../../../common/Header';
import BreadCrumb from '../../../common/BreadCrumb';
import * as songTypeActionCreators from '../../../../actions/songList/actionCreators';
import ImgTopTextBottom from '../../../common/ImgTopTextBottom';
import { createPortal } from 'react-dom';

import chooseImg from '../../../../img/setting.svg';
import {
    modal_content,
    modal_title,
    modal_item_category,
    modal_container,
    modal_hide,
    content_wrapper,
    header_right_render,
    choose_type,
    song_list_grid
} from './index.module.sass'

const ModalListItem = ({ name }) => {
    return <button>{name}</button>
}

const ModalList = ({ category, categoryList, categoryImg }) => {
    return (
        <div className={modal_content}>
            <div className={modal_title}>
                <img src={categoryImg} alt="" />
                <p>{category}</p>
            </div>
            <div className={modal_item_category}>
                {
                    categoryList.map(cate => {
                        return <ModalListItem 
                            key={cate.id}
                            {...cate}
                        />
                    })
                }
            </div>
        </div>
    );
}

const ModalContainer = ({ list, show }) => {
    return (
        <div className={`${modal_container} ${show ? '' : modal_hide}`}>
            <h4>全部歌单</h4>
            {
                list.map(item => {
                    return <ModalList 
                        key={item.category}
                        {...item}
                    />
                })
            }
        </div>
    )
}

const SongTypeModal = (props) => {
    return createPortal(
        <ModalContainer {...props} />,
        document.getElementById('root')
    );
};

const SongList = (props) => {
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
    const [showState, setShowState] = useState(false)

    useEffect(() => {
        // 此处需要在document上注册click事件，当点击document时，关闭modal
        // 点击chooseCate节点也是使用addEventListener原生方法，目的是担心与使用onClick的react合成事件有冲突产生意外的bug（不确定会不会有bug，以及什么样的bug）
        // 所以统一采用addEventListener方法
        const handlerFn = (evt) => {
            if (evt.target.id === 'chooseCate' || evt.target.htmlFor === 'chooseCate') {
                setShowState(!showState)
            } else {
                setShowState(false)
            }
        }
        document.addEventListener('click', handlerFn)
        document.getElementById('chooseCate').addEventListener('click', handlerFn)

        return () => {
            document.removeEventListener('click', handlerFn)
            document.getElementById('chooseCate').removeEventListener('click', handlerFn)
        }
    })

    return (
        <div className={content_wrapper}>
            <Header 
                isShowI={true}
                title={type}
                render={() => {
                    return (
                        <div className={header_right_render}>
                            <BreadCrumb 
                                tabItems={tabItems}
                                clickHandler={handleClick}
                            />
                            <button className={choose_type} id="chooseCate">
                                <img src={chooseImg} alt="" />
                                <label htmlFor="chooseCate">选择分类</label>
                            </button>
                        </div>
                    );
                }}
            />

            {/* 内容展示区域 */}
            <ImgTopTextBottom
                list={songList}
                gridStyle={song_list_grid}
            />

            <SongTypeModal list={songCategory} show={showState} />
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