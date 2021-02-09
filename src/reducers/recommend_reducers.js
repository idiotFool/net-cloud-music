import song1 from '../img/song1.jpg';
import song2 from '../img/song2.jpg';
import song3 from '../img/song3.jpg';
import song4 from '../img/song4.jpg';
import song5 from '../img/song5.jpg';
import song6 from '../img/song6.jpg';
import song7 from '../img/song7.jpg';
import song8 from '../img/song8.jpg';
import song9 from '../img/song9.jpg';
import song10 from '../img/song10.jpg';
const songList = [{
    id: 0,
    title: '推荐歌单',
    list: [{
        desc: '每日歌曲推荐',
        imgSrc: song1
    }, {
        desc: '尽享嗓音治愈系的取暖疗法',
        imgSrc: song2
    }, {
        desc: '来自徐斌的孤单梦境',
        imgSrc: song3
    }, {
        desc: '最懂你的欧美推荐',
        imgSrc: song4
    }, {
        desc: '治愈嗓音，听觉盛宴',
        imgSrc: song5
    }, {
        desc: '耳朵福利：百首好听宝藏热歌精选',
        imgSrc: song6
    }, {
        desc: '将悲伤和决意怀揣在心中',
        imgSrc: song7
    }, {
        desc: '玫瑰小岛和蓝色暗流',
        imgSrc: song8
    }, {
        desc: '哪些听一遍有循环的神级歌曲',
        imgSrc: song9
    }, {
        desc: '请随意播放，切歌算你赢',
        imgSrc: song10
    }]
}, {
    id: 1,
    title: '独家放送',
    list: [{
        desc: '放送_1',
        imgSrc: '1.png'
    }, {
        desc: '放送_2',
        imgSrc: '1.png'
    }, {
        desc: '放送_3',
        imgSrc: '1.png'
    }, {
        desc: '放送_4',
        imgSrc: '1.png'
    }]
}, {
    id: 2,
    title: '推荐MV',
    list: [{
        desc: 'MV_1',
        imgSrc: '1.png'
    }, {
        desc: 'MV_2',
        imgSrc: '1.png'
    }, {
        desc: 'MV_3',
        imgSrc: '1.png'
    }, {
        desc: 'MV_4',
        imgSrc: '1.png'
    }]
}, {
    id: 3,
    title: '最新音乐',
    list: []
}, {
    id: 4,
    title: '主播电台',
    list: []
}];
export default (state=songList, action) => {
    return state;
}