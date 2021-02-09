import React from 'react';
import { connect } from 'react-redux';
import RecommendList from './RecommendList';
import Slider from './Slider'
import './index.css';

const Recommend = (props) => {
    const { recommendList } = props;
    const songList = recommendList[0];
    const playList = recommendList[1];
    const mvList = recommendList[2];
    return (
        <div className="findout_box">
            {/* 图片轮播区域 */}
            <Slider />
        </div>
    );
};

const mapStateToProps = (state) => {
  return {
      recommendList: state.recommend
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);