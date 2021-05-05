import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.sass';
import classnames from 'classnames';

const TabItem = (props) => {
    const { tabName, id, isActive, clickHandler, path } = props;

    return (
        <li
            onClick={() => clickHandler(id)}
            className={classnames({'active': isActive})}
        >
            <Link to={path}>{tabName}</Link>
        </li>
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
                      {...item}
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

