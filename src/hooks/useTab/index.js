import React, { useState } from 'react';
import './index.sass';
import classnames from 'classnames';

const TabItem = (props) => {
    const { tabName, tabId, isActive, clickHandler } = props;

    return (
        <li
            onClick={() => clickHandler(tabId)}
            className={classnames({'active': isActive})}
        >{tabName}</li>
    );
};

const Tabfn = (props) => {
    const { tabItems, initActiveId } = props;
    const [active, setActive] = useState(initActiveId);
    const clickHandler = (tabId) => {
        setActive(tabId)
    };
    return (
      <ul className="tab_container">
          {
              tabItems.map(item => {
                  return <TabItem
                      key={item.id}
                      tabId={item.id}
                      isActive={active === item.id}
                      tabName={item.tabName}
                      clickHandler={clickHandler}
                  />
              })
          }
      </ul>
    );
};

export default Tabfn;

