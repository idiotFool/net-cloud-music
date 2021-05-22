/**
 * module 发现/排行榜
 */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../../../common/Header'
import ImgLeftTextRight from '../../../common/ImgLeftTextRight'
import ImgTopTextBottom from '../../../common/ImgTopTextBottom';
import './index.sass';

const Ranks = ({radioAnchor, recommendSongList}) => {
    return (
        <div className="ranks_container">
            <div className="radio_nice_recommend">
                <Header
                    isShowI={true} 
                    title={"云音乐官方榜"}
                />
                <ImgLeftTextRight list={radioAnchor.list.slice(0, 4)} gridStyle="column2_row2" />
            </div>
            <div className="list_container">
                <Header
                    title={"全球榜"}
                    isShowI={true}
                />
                <ImgTopTextBottom list={recommendSongList.list} gridStyle="column5_rowN" />
            </div>
        </div> 
    );
}

const mapStateToProps = (state) => {
    const { 
        recommendSongList, 
        radioAnchor 
    } = state;
    return {
        radioAnchor,
        recommendSongList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranks)
