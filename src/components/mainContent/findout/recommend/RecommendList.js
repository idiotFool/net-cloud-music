import React from 'react';
import Header from './Header';
import './index.css'

// 推荐歌单、独家放送、推荐MV使用同一个组件
const ListItem = (props) => {
    const { imgSrc, desc } = props;
    return (
        <div key={desc} className="list_item">
            <img src={imgSrc} alt=""/>
            <span>{desc}</span>
        </div>
    );
};

export default (props) => {
    const { title, list, gridStyle } = props;
    const moreClickHandler = () => {
        return;
    };

    return (
        <div className="list_container">
            <Header
                title={title}
                clickHandler={moreClickHandler}
            />
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
        </div>
    );
}