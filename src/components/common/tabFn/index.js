import React, { useState } from 'react';
import { connect } from 'react-redux';
import './index.css';
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
    const { tabItems, initActiveId, styleProps } = props;
    const [active, setActive] = useState(initActiveId);
    const clickHandler = (tabId) => {
        setActive(tabId)
    };
    return (
      <ul className="tab_container" style={styleProps}>
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

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
      dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tabfn)

