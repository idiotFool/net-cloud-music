import React, { Fragment } from 'react';
import Header from './Header';

const RadioItem = (props) => {
    const { desc, imgSrc, title } = props;;
    return (
        <ul className="radio_item">
            <li>
                <img src={imgSrc} alt="" />
            </li>
            <li>
                <p>{desc}</p>
                <p>{title}</p>
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
            <div className="radio_contriner">
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