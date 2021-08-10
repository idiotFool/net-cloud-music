/**
 * @description 此组件主要用于渲染栅格格局，上面显示图片，下面显示文字
 */
import React from 'react';
import {
    list_item,
    list_container_content
} from './ImgTopTextBottom.module.sass';

// desc渲染部分做扩展性优化；desc可能是一段文字，也可能是一段有dom嵌套结构的片段；通过render props实现对desc的定制优化
const ListItem = (props) => {
    const { imgSrc, desc, render } = props;
    return (
        <div key={imgSrc} className={list_item}>
            <img src={imgSrc} alt=""/>
            {
                render && typeof render === 'function'
                    ? render(props)
                    : <span>{desc}</span>
            }
        </div>
    );
};

export default function ImgTopTextBottom({ list, gridStyle, render }) {
    return (
        <div className={`${list_container_content} ${gridStyle}`}>
            {
                list.map(item => {
                    return (
                        <ListItem 
                            key={item.id}
                            {...item}
                            render={render}
                        />
                    );
                })
            }
        </div>
    );
}