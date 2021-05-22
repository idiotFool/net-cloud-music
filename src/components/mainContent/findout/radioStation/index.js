/**
 * module 发现/电台
 */
import React from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick"
import RadioRanks from './RadioRanks';
import ImgLeftTextRight from '../../../common/ImgLeftTextRight';
import ImgTopTextBottom from '../../../common/ImgTopTextBottom';
import Header from '../../../common/Header';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './index.sass';

import emotionImg from '../../../../img/radio_emotion.svg'
import storyImg from '../../../../img/radio_story.svg'
import soundImg from '../../../../img/radio_sound.svg'
import singImg from '../../../../img/radio_sing.svg'
import dramaImg from '../../../../img/radio_drama.svg'
import showImg from '../../../../img/radio_show.svg'
import talkImg from '../../../../img/radio_talk.svg'
import eleImg from '../../../../img/radio_elec.svg'
import restImg from '../../../../img/radio_rest.svg'
import hiImg from '../../../../img/radio_hi.svg'
import alarmImg from '../../../../img/radio_alarm.svg'
import otherImg from '../../../../img/radio_other.svg'
import playerImg from '../../../../img/radio_player.svg'

/**
 * @description 将一个一维数组slice为多个长度为len的一维数组组成的二维数组
 * @param {*} array 
 * @param {*} len 
 */
const sliceArray = (array, len) => {
    const arr = [];
    while (array.length > len) {
        arr.push(array.splice(0, len))
    }

    return arr.concat([array])
}

const SlideItem = ({ id, imgUrl, desc }) => {
    return (
        <div className="slide_item">
            <div className="img_wrapper">
                <img src={imgUrl} alt="" />
            </div>
            <p>{ desc }</p>
        </div>
    );
}

const SlidePage = ({ list }) => {
    return (
        <div className="slide_page">
            {
                list.map(item => {
                    return <SlideItem
                        key={item.id}
                        {...item}
                    />
                })
            }
        </div>
    )
}

const RadioSlide = () => {
    const slideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    const data = [{
        id: 0,
        imgUrl: emotionImg,
        desc: '情感调频'
    }, {
        id: 1,
        imgUrl: storyImg,
        desc: '音乐故事'
    }, {
        id: 2,
        imgUrl: soundImg,
        desc: '声音恋人'
    }, {
        id: 3,
        imgUrl: singImg,
        desc: '创作翻唱'
    }, {
        id: 4,
        imgUrl: dramaImg,
        desc: '声之剧场'
    }, {
        id: 5,
        imgUrl: showImg,
        desc: '脱口秀'
    }, {
        id: 6,
        imgUrl: talkImg,
        desc: '侃侃而谈'
    }, {
        id: 7,
        imgUrl: eleImg,
        desc: '电音趴'
    }, {
        id: 8,
        imgUrl: restImg,
        desc: '助眠解压'
    }, {
        id: 9,
        imgUrl: hiImg,
        desc: '你好爱豆'
    }, {
        id: 10,
        imgUrl: alarmImg,
        desc: '铃声'
    }, {
        id: 11,
        imgUrl: otherImg,
        desc: '其他'
    }, {
        id: 12,
        imgUrl: playerImg,
        desc: '我要做主播'
    }];

    return (
        <Slider {...slideSettings}>
            {
                // 一页显示12个条目 
               sliceArray(data, 12).map(item => {
                    return <SlidePage 
                        key={item[0].id}
                        list={item}
                    />
               }) 
            }
        </Slider>
    );
}

const RadioStation = ({radioAnchor, recommendSongList}) => {
    const moreClickHandler = () => {
        return;
    }

    return (
        <div className="radio_station_container">
            <div className="radio_slide">
                <RadioSlide />
            </div>

            <RadioRanks />

            {/* 精彩界面推荐 */}
            <div className="radio_nice_recommend">
                <Header
                    isShowI={true} 
                    title={"精彩界面推荐"}
                />
                <ImgLeftTextRight list={radioAnchor.list.slice(0, 4)} gridStyle="column2_row2" />
            </div>

            {/* 精选电台-谈情说爱 */}
            <div className="list_container">
                <Header
                    title={"精选电台-谈情说爱"}
                    isShowI={true}
                />
                <ImgTopTextBottom list={recommendSongList.list.slice(0, 5)} gridStyle="column5_row1" />
            </div>


            {/* 热门电台 */}
            <div className="list_container">
                <Header
                    title={"热门电台"}
                    isShowI={true}
                />
                <ImgTopTextBottom list={recommendSongList.list} gridStyle="column5_rowN" />
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { 
        recommendSongList, 
        radioAnchor 
    } = state;
    return {
        radioAnchor,
        recommendSongList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RadioStation)