import React from 'react';
import './header.css';

export default function Header({render, isShowI=false, title}) {
    return (
        <div className="header_wrapper">
            <div className="title">
                <i className={isShowI ? '' : 'hidden'}></i>
                <div className="">{title}</div>
            </div>
            {
                render()
            }
        </div>
    );
}

