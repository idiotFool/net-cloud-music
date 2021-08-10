import React from 'react';
import styles from './header.module.sass';

export default function Header({render, isShowI=false, title}) {
    return (
        <div className={styles['header_wrapper']}>
            <div className={styles['title']}>
                <i className={isShowI ? '' : styles['hidden']}></i>
                <div className="">{title}</div>
            </div>
            {
                typeof render === 'function' && render()
            }
        </div>
    );
}

