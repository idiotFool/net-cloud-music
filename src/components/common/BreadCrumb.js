import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './BreadCrumb.css';

const TabItem = ({tabName}) => {
    return (
        <li>
            {tabName}
        </li>
    );
};

export default function BreadCrumb(props) {
    const { tabItems } = props;

    return (
      <ul className="bread_crumb_container">
          {
              tabItems.map(item => {
                  return <TabItem
                      key={item.id}
                      {...item}
                  />
              })
          }
      </ul>
    );
};

