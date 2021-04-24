import React, { Fragment} from 'react';
import Header from './Header';

const SongsItem = (props) => {
    const { idx, imgSrc, author, songName, album, hasVideo } = props;
    return (
        <ul className="new_song_item">
            <li>{idx}</li>
            <li>
                <img src={imgSrc} />
                <i></i>
            </li>
            <li>
                <p>{songName}</p>
                <p>{`${author} - ${album}`}</p>
            </li>
            <li className={!hasVideo ? 'song_video_hidden' : ''}></li>
            <li></li>
        </ul>
    );
}

const SongsRow = (props) => {
    const { rowData } = props;
    return (
        <div className="new_song_row">
            {
                rowData.map(item => {
                    return (
                        <SongsItem 
                            key={item.id}
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
            {
                covertDimension(list).map((item, idx) => {
                    // 此处遍历的为二维数组，key值只能idx
                    return (
                        <SongsRow 
                            key={idx}
                            rowData={item}
                        />
                    );
                })
            }
        </Fragment>
    );
}