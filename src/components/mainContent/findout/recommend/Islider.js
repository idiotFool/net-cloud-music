import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

export default function Islider(props) {
    const { data } = props;
    const slideSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        className: 'slide_img'
    };

    return (
        <Slider {...slideSettings}>
            {
                data.map(item => {
                    return (
                        <div key={item}>
                            <img src={item} style={{height: '300px', width: '100%'}} />
                        </div>
                    )
                })
            }
        </Slider>
    );
};