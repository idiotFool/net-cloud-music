import React from 'react';
import { connect } from 'react-redux';
import RecommendList from './RecommendList';
import NewestSongs from './NewestSongs';
import RadioAnchor from './RadioAnchor';
import img1 from '../../../../img/slide1.jpeg';
import img2 from '../../../../img/slide2.jpeg';
import img3 from '../../../../img/slide3.jpeg';
import img4 from '../../../../img/slide4.jpeg';
import img5 from '../../../../img/slide5.jpeg';
import Islider from './Islider'
import './index.css';

const Recommend = (props) => {
    const { 
        recommendSongList, 
        vipSongList,  
        newestSongList,
        recommendMV,
        radioAnchor
    } = props;

    return (
        <div className="findout_box">
            {/* 图片轮播区域 */}
            <div className="slider_container">
                <Islider data={[img1, img2, img3, img4, img5]} />
            </div>

            {/* 推荐歌单 */}
            <div className="song_list_wrapper">
                <RecommendList {...recommendSongList} />
            </div>

            {/* 独家放送 */}
            <div>
                <RecommendList {...vipSongList} />
            </div>

            {/* 最新音乐 */}
            <div>
                <NewestSongs {...newestSongList} />
            </div>

            {/* 推荐MV */}
            <div>
                <RecommendList {...recommendMV} />
            </div>

            {/* 主播电台 */}
            <div>
                <RadioAnchor {...radioAnchor} />
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