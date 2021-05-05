import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import './BreadCrumb.sass';
import { connect } from 'react-redux'

const TabItem = ({tabName}) => {
    return (
        <li>
            {tabName}
        </li>
    );
};

const BreadCrumb = (props) => {
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
}

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BreadCrumb)
