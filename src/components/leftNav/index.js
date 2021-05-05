import React from 'react';
import { connect } from 'react-redux'
import classnames from 'classnames';
import { setNav } from '../../actions/leftNav_action';
import { Link } from 'react-router-dom';
import './index.sass';

const LeftNavItem = (props) => {
    const {
        tabName,
        active,
        id,
        router,
        clickHandler
    } = props;
    return (
        <li
            className={classnames({'active': active})}
            onClick={() => {clickHandler(id)}}
        >
            <Link to={router}>
                <p className="icon"></p>
                <label>{ tabName }</label>
            </Link>
        </li>
    )
};

// const LeftNav = (props) => {
//     const { navItems, dispatch } = props;
//     const clickHandler = id => {
//         dispatch(setNav(id))
//     };
//     return (
//         <div className="nav_container_wrapper">
//             <ul className="nav_container">
//                 {
//                     navItems.map(item => {
//                         return (
//                             <LeftNavItem
//                                 key={item.id}
//                                 clickHandler={clickHandler}
//                                 { ...item }
//                             />
//                         )
//                     })
//                 }
//             </ul>
//             <div className="main_content">
//                 { props.children }
//             </div>
//         </div>
//     );
// };

const LeftNav = (props) => {
    const { navItems, dispatch } = props;
    const clickHandler = id => {
        dispatch(setNav(id))
    };
    return (
        <ul className="nav_container">
            {
                navItems.map(item => {
                    return (
                        <LeftNavItem
                            key={item.id}
                            clickHandler={clickHandler}
                            { ...item }
                        />
                    )
                })
            }
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        navItems: state.leftNav
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);