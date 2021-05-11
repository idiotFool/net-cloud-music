/**
 * @description 此组件主要用于渲染栅格格局，上面显示图片，下面显示文字
 */
import React from 'react';
import './ImgTopTextBottom.sass'

const ListItem = (props) => {
    const { imgSrc, desc } = props;
    return (
        <div key={desc} className="list_item">
            <img src={imgSrc} alt=""/>
            <span>{desc}</span>
        </div>
    );
};

export default function ImgTopTextBottom({ list, gridStyle }) {
    return (
        <div className={`list_container_content ${gridStyle}`}>
            {
                list.map(item => {
                    return (
                        <ListItem 
                            key={item.id}
                            {...item}
                        />
                    );
                })
            }
        </div>
    );
}