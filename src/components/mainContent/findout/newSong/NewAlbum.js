import React from 'react';
import ImgTopTextBottom from '../../../common/ImgTopTextBottom';
import {
    album_desc_container,
    new_album_list,
    column4_rowN
} from './index.module.sass';
import album1 from '../../../../img/album1.jpg'
import album2 from '../../../../img/album2.jpg'
import album3 from '../../../../img/album3.jpg'
import album4 from '../../../../img/album4.jpg'
import album5 from '../../../../img/album5.jpg'
import album6 from '../../../../img/album6.jpg'
import album7 from '../../../../img/album7.jpg'
import album8 from '../../../../img/album8.jpg'

const Desc = ({album, author}) => {
    return (
        <div className={album_desc_container}>
            <span>{album}</span>
            <span>{author}</span>
        </div>
    );
}

export default function NewAlbum() {
    const data = [{
        time: '本周新碟',
        list: [{
            album: '裹着心的光',
            author: '林俊杰',
            imgSrc: album1,
            id: 0,
        }, {
            album: 'the late night pack',
            author: '艾福杰尼',
            imgSrc: album2,
            id: 1
        }, {
            album: '妇女新知 2021',
            author: '莫文蔚',
            imgSrc: album3,
            id: 2
        }, {
            album: '没时间流眼泪',
            author: '王以太',
            imgSrc: album4,
            id: 3
        }, {
            album: 'life',
            author: '橙汁',
            imgSrc: album5,
            id: 4,
        }, {
            album: '捕捉',
            author: '张叶蕾',
            imgSrc: album6,
            id: 5
        }, {
            album: '要不要',
            author: '于文文',
            imgSrc: album7,
            id: 6
        }, {
            album: '小薇',
            author: '落日飞车',
            imgSrc: album8,
            id: 7
        }]
    }, {
        time: '2021/07',
        list: [{
            album: '裹着心的光',
            author: '林俊杰',
            imgSrc: album1,
            id: 0,
        }, {
            album: 'the late night pack',
            author: '艾福杰尼',
            imgSrc: album2,
            id: 1
        }, {
            album: '妇女新知 2021',
            author: '莫文蔚',
            imgSrc: album3,
            id: 2
        }, {
            album: '没时间流眼泪',
            author: '王以太',
            imgSrc: album4,
            id: 3
        }, {
            album: 'life',
            author: '橙汁',
            imgSrc: album5,
            id: 4,
        }, {
            album: '捕捉',
            author: '张叶蕾',
            imgSrc: album6,
            id: 5
        }, {
            album: '要不要',
            author: '于文文',
            imgSrc: album7,
            id: 6
        }, {
            album: '小薇',
            author: '落日飞车',
            imgSrc: album8,
            id: 7
        }]
    }];

    return (
        <div>
            {
              data.map(item => {
                  return (
                      <div className={new_album_list} key={item.time}>
                          <p>{item.time}</p>
                          <div>
                              <ImgTopTextBottom 
                                list={item.list} 
                                gridStyle={column4_rowN} 
                                render={props => <Desc {...props} />}
                              />
                          </div>
                      </div>
                  );
              })  
            }
        </div>
    );
}