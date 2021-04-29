import React, { Fragment} from 'react';
import Header from './Header';
import mvImg from '../../../../img/mv.svg'
import settingImg from '../../../../img/setting.svg'
import playImg from '../../../../img/play.svg'

const SongsItem = (props) => {
    const { showIdx, imgSrc, author, songName, album, hasVideo, rightBorder } = props;

    return (
        <ul className={`new_song_item ${rightBorder}`}>
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

const SongsRow = (props) => {
    const { rowData, stripe } = props;
    return (
        <div className={`new_song_row ${stripe}`}>
            {
                rowData.map((item, idx) => {
                    return (
                        <SongsItem 
                            key={item.id}
                            rightBorder={idx % 2 === 0 ? 'song_right_border' : ''}
                            {...item}
                        />
                    );
                })
            }
        </div>
    );
}

export default function NewestSongs(props) {
    const { title, list } = props;
    // 将一维数组转换为二位数组
    const covertDimension = (array) => {
        const even = [];
        const odd = [];
        array.forEach((item, idx) => {
            // 此处只为特定场景所需，用于页面的序号显示
            const showItem = {...item, showIdx: idx + 1};
            idx % 2 === 0 ? even.push(showItem) : odd.push(showItem)
        });

        return even.map((item, idx) => {
            return [item, odd[idx]]
        });
    }

    const moreClickHandler = () => {
        return;
    }

    return (
        <Fragment>
            <Header 
                title={title}
                clickHandler={moreClickHandler}
            />
            <div className="new_song_wrapper">
                {
                    // covertDimension(list).map((item, idx) => {
                    //     // 此处遍历的为二维数组，key值只能idx
                    //     return (
                    //         <SongsRow 
                    //             key={idx}
                    //             stripe={idx % 2 === 0 ? 'new_song_even': 'new_song_odd'}
                    //             rowData={item}
                    //         />
                    //     );
                    // })

                    list.map((item, idx) => {
                        return <SongsItem 
                            key={item.id}
                            showIdx={idx + 1}
                            rightBorder={idx % 2 === 0 ? 'song_right_border' : ''}
                            {...item}
                        />
                    })
                }
            </div>
        </Fragment>
    );
}    