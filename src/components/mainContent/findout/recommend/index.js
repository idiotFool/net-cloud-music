import React from 'react';
import { connect } from 'react-redux';
import NewestSongs from './NewestSongs';

import Header from '../../../common/Header';
import More from '../../../common/More';
import ImgLeftTextRight from '../../../common/ImgLeftTextRight'
import ImgTopTextBottom from  '../../../common/ImgTopTextBottom'

import Sequence from './Sequence';
import img1 from '../../../../img/slide1.jpeg';
import img2 from '../../../../img/slide2.jpeg';
import img3 from '../../../../img/slide3.jpeg';
import img4 from '../../../../img/slide4.jpeg';
import img5 from '../../../../img/slide5.jpeg';
import Islider from './Islider'
import './index.sass'

const Recommend = (props) => {
    const { 
        recommendSongList, 
        vipSongList,  
        newestSongList,
        recommendMV,
        radioAnchor
    } = props;
    const moreClickHandler = () => {
        return;
    }

    return (
        <div className="findout_box">
            {/* 图片轮播区域 */}
            <div className="slider_container">
                <Islider data={[img1, img2, img3, img4, img5]} />
            </div>

            {/* 推荐歌单 */}
            <div className="song_list_wrapper">
                <div className="list_container">
                    <Header
                        title={recommendSongList.title}
                        render={() => {
                            return <More clickHandler={moreClickHandler} />
                        }}
                    />
                    <ImgTopTextBottom list={recommendSongList.list} gridStyle="recommend_song_grid" />
                </div>
            </div>

            {/* 独家放送 */}
            <div className="list_container">
                <Header
                    title={vipSongList.title}
                    render={() => {
                        return <More clickHandler={moreClickHandler} />
                    }}
                />
                <ImgTopTextBottom list={vipSongList.list} gridStyle="vip_song_grid" />
            </div>

            {/* 最新音乐 */}
            <div>
                <NewestSongs {...newestSongList} />
            </div>

            {/* 推荐MV */}
            <div className="list_container">
                <Header
                    title={recommendMV.title}
                    render={() => {
                        return <More clickHandler={moreClickHandler} />
                    }}
                />
                <ImgTopTextBottom list={recommendMV.list} gridStyle="recommend_mv_grid" />
            </div>

            {/* 主播电台 */}
            <div>
                <Header 
                    title={radioAnchor.title}
                    render={() => {
                        return <More clickHandler={moreClickHandler} />
                    }}
                />
                <ImgLeftTextRight list={radioAnchor.list} />
            </div>

            {/* 调整显示模块 */}
            <div className="bottom_seq_wrapper">
                <Sequence />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { 
        recommendSongList, 
        vipSongList, 
        newestSongList, 
        recommendMV,
        radioAnchor 
    } = state;
    return {
        recommendSongList,
        vipSongList,
        newestSongList,
        recommendMV,
        radioAnchor
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);