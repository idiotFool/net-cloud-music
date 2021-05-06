import React from 'react';
import './Songs.sass';

const ListItem = (props) => {
    const { imgSrc, desc } = props;
    return (
        <div key={desc} className="list_item">
            <img src={imgSrc} alt=""/>
            <span>{desc}</span>
        </div>
    );
};

export default function Songs({gridStyle, list}) {
    console.log('list ->', list)
    return (
        <div className={`list_container_content ${gridStyle}`}>
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