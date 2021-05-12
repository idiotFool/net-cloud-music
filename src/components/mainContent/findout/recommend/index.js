import React, {
    Fragment
} from 'react';
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

// gridStyle属性决定当前元素的栅格布局方式
const MixContent = ({title, list, gridStyle, moreClickHandler}) => {
    return (
        <div className="list_container">
            <Header
                title={title}
                render={() => {
                    return <More clickHandler={moreClickHandler} />
                }}
            />
            <ImgTopTextBottom list={list} gridStyle={gridStyle} />
        </div>
    );
}

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
                <MixContent {...recommendSongList} gridStyle="recommend_song_grid" moreClickHandler={moreClickHandler} />
            </div>

            {/* 独家放送 */}
            <MixContent {...vipSongList} gridStyle="vip_song_grid" moreClickHandler={moreClickHandler} />

            {/* 最新音乐 */}
            <div>
                <NewestSongs {...newestSongList} />
            </div>

            {/* 推荐MV */}
            <MixContent {...recommendMV} gridStyle="recommend_mv_grid" moreClickHandler={moreClickHandler} />

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