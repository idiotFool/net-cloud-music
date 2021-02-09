import React from 'react';
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
    const { recommendTitle, list } = props;
    const moreClickHandler = () => {

    };

    return (
        <div className="list_container">
            <div className="list_container_title">
                <div>{recommendTitle}</div>
                <div onClick={() => {moreClickHandler()}}>更多</div>
            </div>
            <div>
                <SongList
                    list={list}
                />
            </div>
        </div>
    );
}