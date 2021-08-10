import React from 'react';
import { connect } from 'react-redux';
import Tabfn from '../common/tabFn';
import {main_content_container} from './index.sass'

const MainContent = () => {
    return (
        <div className={main_content_container}>

        </div>
    )
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContent);