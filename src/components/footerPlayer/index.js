import React from 'react';
import { connect } from 'react-redux';
import './index.css'

const FooterPlayer = () => {
    return (
        <div className="footer_player_container">

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

export default connect(mapStateToProps, mapDispatchToProps)(FooterPlayer);