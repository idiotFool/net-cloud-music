import React from 'react';
import ImgTopTextBottom from '../../../common/ImgTopTextBottom';

export default function NewAlbum() {
    const data = [{
        timeDesc: '本周新碟',
        list: [{
            desc: '裹着心的光',
            author: '林俊杰',
            imgSrc: '',
            id: 0,
        }, {
            desc: 'the late night pack',
            author: '艾福杰尼',
            imgSrc: '',
            id: 1
        }, {
            desc: '妇女新知 2021',
            author: '莫文蔚',
            imgSrc: '',
            id: 2
        }, {
            desc: '没时间流眼泪',
            author: '王以太',
            imgSrc: '',
            id: 3
        }, {
            desc: 'life',
            author: '橙汁',
            imgSrc: '',
            id: 4,
        }, {
            desc: '捕捉',
            author: '张叶蕾',
            imgSrc: '',
            id: 5
        }, {
            desc: '要不要',
            author: '于文文',
            imgSrc: '',
            id: 6
        }, {
            desc: '小薇',
            author: '落日飞车',
            imgSrc: '',
            id: 7
        }]
    }]
    return (
        <div>
            {
              data.map(item => {
                  return (
                      <div>
                          <p></p>
                          
                      </div>
                  );
              })  
            }
        </div>
    );
}