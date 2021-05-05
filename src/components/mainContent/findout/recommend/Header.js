import React from 'react'
import './index.sass'

export default function Header(props) {
    const { title, clickHandler } = props;

    return (
        <div className="list_container_header">
            <div className="list_container_title">{title}</div>
            <div onClick={clickHandler} className="list_container_more">
                <span>更多</span>
                <i></i>
            </div>
        </div>
    ); 
}