import React from 'react';
import './NewSongList.sass';

import mvImg from '../../img/mv.svg'
import settingImg from '../../img/setting.svg'
import playImg from '../../img/play.svg'

const SongsItem = (props) => {
    const { 
        showIdx, 
        imgSrc, 
        author, 
        songName, 
        album, 
        hasVideo, 
        rightBorder, 
        bgColorClassName,
        isShowImg
    } = props;

    return (
        <ul className={`new_song_item ${rightBorder} ${bgColorClassName}`} >
            <li className="song_item_idx">{showIdx}</li>
            {/* 直接在song_item_img设置flex，hidden设置会失败 */}
            <li className={`song_item_img ${isShowImg ? 'showFlex' : 'hidden'}`} >
                <img className="picture_img" src={imgSrc} alt="" />
                <img className="play_img" src={playImg} alt="" />
            </li>
            <li className="song_item_desc">
                <p className="desc_name">{songName}</p>
                <p className="desc_album">{`${author} - ${album}`}</p>
            </li>
            <li className="song_item_mv">
                <img src={hasVideo ? mvImg : ''} alt="" />
            </li>
            <li className="song_item_setting">
                <img src={settingImg} alt="" />
            </li>
        </ul>
    );
}

/**
 * @param {stripe} 表示条纹的显示的颜色的行为奇数还是偶数（以较深的颜色为基准），取值为odd与even，默认为odd
 * @returns 
 */
export default function NewSongList({ list, isShowImg=false, stripe='odd' }) {
    // 从0行算起，所以取余为0时为奇数行，不为0时为偶数行
    // 此处除2是由于每行显示两个数据，与栅格布局相关
    const getRowType = (idx) => {
        return Math.floor(idx / 2) % 2 === 0 ? 'odd' : 'even'; 
    }

    return (
        <div className="new_song_wrapper">
            {
                list.map((item, idx) => {
                    return <SongsItem 
                        key={item.id}
                        showIdx={idx + 1}
                        rightBorder={idx % 2 === 0 ? 'song_right_border' : ''}
                        bgColorClassName={getRowType(idx) === stripe ? 'new_song_dark' : 'new_song_light'}
                        isShowImg={isShowImg}
                        {...item}
                    />
                })
            }
        </div>
    );
};