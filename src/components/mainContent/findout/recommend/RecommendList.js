import React from 'react';

import Header from './Header';
import './index.css'

const halfSplitArray = (arr) => {
    const len = arr.length;
    let res = [];
    for (let i = 0; i < len; i += len / 2 ) {
        res.push(arr.slice(i, i + len / 2));
    }
    return res;
};

// 推荐歌单、独家放送、推荐MV使用同一个组件
const SongListItem = (props) => {
    const { itemList } = props;
    return itemList.map(item => {
        const { imgSrc, desc } = item;
        return (
            <div key={desc} className="song_item">
                <img src={imgSrc} alt=""/>
                <span>{desc}</span>
            </div>
        );
    })
};

const SongList = (props) => {
    const { list } = props;
    const rowList = list.length === 4 ? [list] : halfSplitArray(list);

    return (
        <ul>
            {
                rowList.map(item => {
                    return (
                        <li key={item[0].desc} className="song_row">
                            <SongListItem
                                itemList={item}
                            />
                        </li>
                    );
                })
            }
        </ul>
    );
};

export default (props) => {
    const { title, list } = props;
    const moreClickHandler = () => {
        return;
    };

    return (
        <div className="list_container">
            <Header
                title={title}
                clickHandler={moreClickHandler}
            />
            <div className="list_container_songs">
                <SongList
                    list={list}
                />
            </div>
        </div>
    );
}