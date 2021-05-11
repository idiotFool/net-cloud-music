/**
 * @description 此组件主要是针对栅格结构的布局，同时左侧显示的是图片，右侧显示的是文字
 */
import React from 'react';
import './ImgLeftTextRight.sass';

const RadioItem = (props) => {
    const { desc, imgSrc, title } = props;;
    return (
        <ul className="left_right_item">
            <li className="img_wrapper">
                <img src={imgSrc} alt="" />
            </li>
            <li className="text_wrapper">
                <p className="desc">{desc}</p>
                <p className="title">{title}</p>
            </li>
        </ul>
    );
}

export default function({list}) {
    return (
        <div className="left_right_container">
            {
                list.map(item => {
                    return (
                        <RadioItem
                            key={item.id}
                            {...item}
                        />
                    );
                })
            }
        </div>
    );
}