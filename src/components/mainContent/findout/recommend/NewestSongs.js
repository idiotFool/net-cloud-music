import React, { Fragment} from 'react';
import Header from '../../../common/Header'
import More from '../../../common/More'

import mvImg from '../../../../img/mv.svg'
import settingImg from '../../../../img/setting.svg'
import playImg from '../../../../img/play.svg'

const SongsItem = (props) => {
    const { showIdx, imgSrc, author, songName, album, hasVideo, rightBorder, isEven } = props;

    return (
        <ul className={`new_song_item ${rightBorder} ${isEven ? 'new_song_even' : 'new_song_odd'}`} >
            <li className="song_item_idx">{showIdx}</li>
            <li className="song_item_img">
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


export default function NewestSongs(props) {
    const { title, list } = props;
    const moreClickHandler = () => {
        return;
    }
    const isEvenRow = (idx) => {
        return [2, 3, 6, 7].includes(idx)
    }

    return (
        <Fragment>
            <Header 
                title={title}
                render={() => {
                    return <More clickHandler={moreClickHandler} />
                }}
            />
            <div className="new_song_wrapper">
                {
                    list.map((item, idx) => {
                        return <SongsItem 
                            key={item.id}
                            showIdx={idx + 1}
                            rightBorder={idx % 2 === 0 ? 'song_right_border' : ''}
                            isEven={isEvenRow(idx)}
                            {...item}
                        />
                    })
                }
            </div>
        </Fragment>
    );
}    