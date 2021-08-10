import React, { Fragment } from 'react';

import Header from '../../../common/Header';
import ImgTopTextBottom from '../../../common/ImgTopTextBottom';
import More from '../../../common/More';
import img1 from '../../../../img/newMv1.jpg';
import img2 from '../../../../img/newMv2.jpg';
import img3 from '../../../../img/newMv3.jpg';
import img4 from '../../../../img/newMv4.jpg';
import img5 from '../../../../img/newMv5.jpg';

import {
    mv_container,
    new_mv_grid
} from './index.module.sass'

const supremeList = [{
    id: 0,
    mv: '手术刀Scalpel',
    author: 'Melo',
    imgSrc: img1
}, {
    id: 1,
    mv: '彩券',
    author: '薛之谦',
    imgSrc: img2
}, {
    id: 2,
    mv: '田',
    author: '田馥甄',
    imgSrc: img3
}, {
    id: 3,
    mv: '我们的罗曼史',
    author: '苏皖',
    imgSrc: img4
}, {
    id: 4,
    mv: '过',
    author: '王嘉尔',
    imgSrc: img5
}]

export default function Supreme() {
    const moreClickHandler = () => {
        return;
    }
    return (
        <div className={mv_container}>
            {/* 最新MV */}
            <Fragment>
                <Header 
                    title="最新MV"
                    isShowI={true}
                    render={() => {
                        return <More clickHandler={moreClickHandler} />
                    }}
                />
                <ImgTopTextBottom list={supremeList} gridStyle={new_mv_grid} />
            </Fragment>

            {/* 热播MV */}

            {/* MV周榜 */}
        </div>
    );
}