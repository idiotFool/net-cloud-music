/**
 * @description 此组件主要是针对栅格结构的布局，同时左侧显示的是图片，右侧显示的是文字
 */
import React from 'react';
import styles from './ImgLeftTextRight.module.sass';

const ListItem = (props) => {
    const { desc, imgSrc, title } = props;;
    return (
        <ul className={styles['left_right_item']}>
            <li className={styles['img_wrapper']}>
                <img src={imgSrc} alt="" />
            </li>
            <li className={styles['text_wrapper']}>
                <p className={styles['desc']}>{desc}</p>
                <p className={styles['title']}>{title}</p>
            </li>
        </ul>
    );
}

export default function ImgLeftTextRight({list, gridStyle}) {
    return (
        <div className={gridStyle}>
            {
                list.map(item => {
                    return (
                        <ListItem
                            key={item.id}
                            {...item}
                        />
                    );
                })
            }
        </div>
    );
}