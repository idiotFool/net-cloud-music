import React from 'react';
import { Link } from 'react-router-dom';
import { bread_crumb_container } from './BreadCrumb.module.sass';
import { connect } from 'react-redux'

const TabItem = ({tabName, clickHandler}) => {
    return (
        <li onClick={() => clickHandler(tabName)}>
            {tabName}
        </li>
    );
};

const BreadCrumb = (props) => {
    const { tabItems, clickHandler } = props;

    return (
      <ul className={bread_crumb_container}>
          {
              tabItems.map(item => {
                  return <TabItem
                      key={item.id}
                      {...item}
                      clickHandler={clickHandler}
                  />
              })
          }
      </ul>
    );
}

export default BreadCrumb;
