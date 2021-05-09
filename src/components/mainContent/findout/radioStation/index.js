import React from 'react';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import './index.sass';

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
        <div>
            <img src={imgUrl} alt="" />
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
        imgUrl: '',
        desc: '情感调频'
    }, {
        id: 1,
        imgUrl: '',
        desc: '音乐故事'
    }, {
        id: 2,
        imgUrl: '',
        desc: '声音恋人'
    }, {
        id: 3,
        imgUrl: '',
        desc: '创作翻唱'
    }, {
        id: 4,
        imgUrl: '',
        desc: '声之剧场'
    }, {
        id: 5,
        imgUrl: '',
        desc: '脱口秀'
    }, {
        id: 6,
        imgUrl: '',
        desc: '侃侃而谈'
    }, {
        id: 7,
        imgUrl: '',
        desc: '电音趴'
    }, {
        id: 8,
        imgUrl: '',
        desc: '助眠解压'
    }, {
        id: 9,
        imgUrl: '',
        desc: '你好爱豆'
    }, {
        id: 10,
        imgUrl: '',
        desc: '铃声'
    }, {
        id: 11,
        imgUrl: '',
        desc: '其他'
    }, {
        id: 12,
        imgUrl: '',
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

export default function RadioStation() {
    return (
        <div className="radio_station_container">
            <div className="radio_slide">
                <RadioSlide />
            </div>
        </div>
    );
}