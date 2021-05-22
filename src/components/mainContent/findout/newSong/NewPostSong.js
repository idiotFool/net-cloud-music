import React, { Fragment } from 'react';
import TabFn from '../../../common/tabFn';
import { useLocation } from 'react-router-dom'
import NewSongList from '../../../common/NewSongList'
import qs from 'query-string';

import playImg from '../../../../img/play_black.svg';
import addImg from '../../../../img/add.svg'

const useQuery = () => {
    return qs.parse(useLocation().search);
}

const PlayItem = ({text, img}) => {
    return (
        <li>
            <img src={img} alt="" />
            <label>{text}</label>
        </li>
    );
} 

const PlayHeader = () => {
    const headerContents = [{
        text: '播放全部',
        id: 0,
        img: playImg
    }, {
        text: '收藏',
        id: 1,
        img: addImg
    }];
    return (
        <ul className="play_header">
            {
                headerContents.map(item => {
                    return <PlayItem 
                        key={item.id}
                        {...item}
                    />
                })
            }
        </ul>
    );
}

const SongList = ({ songList, type='all' }) => {
    
    return (
        <div className="main_wrapper">
            <PlayHeader />
            <NewSongList list={songList}  />
        </div>
    );
}

export default function NewPostSong({ songList }) {
    const pathRoot = '/findout/new/song';
    const tabItems = [{
        tabName: '全部',
        id: 'tab_0',
        path: `${pathRoot}?type=all`
    }, {
        tabName: '华语',
        id: 'tab_1',
        path: `${pathRoot}?type=cn`
    },{
        tabName: '欧美',
        id: 'tab_2',
        path: `${pathRoot}?type=us`
    },{
        tabName: '韩国',
        id: 'tab_3',
        path: `${pathRoot}?type=korea`
    },{
        tabName: '日本',
        id: 'tab_4',
        path: `${pathRoot}?type=japan`
    }];
    const style = {
        height: '32px',
        width: '40%',
        margin: '0 auto'
    }
    const { type } = useQuery();

    return (
        <div className="song_wrapper">
            <div className="nav_container">
                <TabFn
                    tabItems={tabItems}
                    initActiveId={tabItems[0].id}
                    styleProps={style}
                />

                <SongList type={type} songList={songList} />
            </div>
        </div>
    );
}