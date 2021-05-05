import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Header from '../../../common/Header';
import BreadCrumb from '../../../common/BreadCrumb';
import chooseImg from '../../../../img/setting.svg';
import './index.css'

const SongList = ({type}) => {
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

    return (
        <div className="content_wrapper">
            <Header 
                isShowI={true}
                title={type}
                render={() => {
                    return (
                        <div className="header_right_render">
                            <BreadCrumb tabItems={tabItems} />
                            <button className="choose_type">
                                <img src={chooseImg} alt="" />
                                <label>选择分类</label>
                            </button>
                        </div>
                    );
                }}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log('state->',state)
    const { songType: {
        type
    } } = state;
    return {
        type
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SongList)