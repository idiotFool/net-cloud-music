import React from 'react';
import './More.sass';

export default function More({clickHandler}) {
    return (
        <div onClick={clickHandler} className="header_more">
            <span>更多</span>
            <i></i>
        </div>
    );
}