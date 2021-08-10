import React from 'react';
import {
    radio_rank,
    title,
    sub_title,
    top_one
} from './index.module.sass'

import arrowImg from '../../../../img/arrow_right.svg'
import radio1 from '../../../../img/radio1.jpg';
import radio2 from '../../../../img/radio2.jpg';
import radio3 from '../../../../img/radio3.jpg';

export default function RadioRanks() {
    const top3 = [{
        id: 1,
        imgSrc: radio1
    }, {
        id: 0,
        imgSrc: radio2
    }, {
        id: 2,
        imgSrc: radio3
    },];
    return (
        <div className={radio_rank}>
            <div>
                <p className={title}>
                    <span>主播电台排行榜</span>
                    <img src={arrowImg} alt="" />
                </p>
                <p className={sub_title}>最火的节目和电台，每天更新</p>
            </div>
            <ul>
                {
                    top3.map((item, idx) => {
                        return <li key={item.id} className={idx === 1 ? top_one : ''}>
                            <img src={item.imgSrc} alt=""/>
                        </li>
                    })
                }
            </ul>
        </div>
    );
}