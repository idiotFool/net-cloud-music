import React, { Fragment } from 'react';
import Header from './Header';

const RadioItem = (props) => {
    const { desc, imgSrc, title } = props;;
    return (
        <ul className="radio_item">
            <li className="radio_img_wrapper">
                <img src={imgSrc} alt="" />
            </li>
            <li className="radio_text_wrapper">
                <p className="radio_desc">{desc}</p>
                <p className="radio_title">{title}</p>
            </li>
        </ul>
    );
}

export default function RadioAnchor(props) {
    const { title, list } = props;
    const moreClickHandler = () => {
        return;
    }

    return (
        <Fragment>
            <Header 
                title={title}
                clickHandler={moreClickHandler}
            />
            <div className="radio_container">
                {
                    list.map(item => {
                        return (
                            <RadioItem
                                key={item.id}
                                {...item}
                            />
                        );
                    })
                }
            </div>
        </Fragment>
    );
}