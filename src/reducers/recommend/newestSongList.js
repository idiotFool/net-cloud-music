import img1 from '../../img/new1.jpg'
import img2 from '../../img/new2.jpg'
import img3 from '../../img/new3.jpg'
import img4 from '../../img/new4.jpg'
import img5 from '../../img/new5.jpg'
import img6 from '../../img/new6.jpg'
import img7 from '../../img/new7.jpg'
import img8 from '../../img/new8.jpg'
import img9 from '../../img/new9.jpg'
import img10 from '../../img/new10.jpg'

const initialState = {
    title: '最新音乐',
    list: [{
        author: '郭顶',
        songName: '_5:15',
        album: '_5:15',
        imgSrc: img1,
        hasVideo: false,
        id: 0,
    }, {
        author: '欧阳娜娜',
        songName: '无名浪潮',
        album: 'NANA 3',
        imgSrc: img2,
        hasVideo: false,
        id: 1
    }, {
        author: '魏如萱/裘德',
        songName: '四月是适合说谎的日子',
        album: '四月是适合说谎的日子',
        imgSrc: img3,
        hasVideo: false,
        id: 2
    }, {
        author: '张也/周深',
        songName: '灯火里的中国',
        album: '灯火里的中国',
        imgSrc: img4,
        hasVideo: false,
        id: 3
    }, {
        author: 'LiSA',
        songName: 'Another Great Day',
        album: 'Another Great Day',
        imgSrc: img5,
        hasVideo: true,
        id: 4
    }, {
        author: '毛不易',
        songName: '火花',
        album: '火花',
        imgSrc: img6,
        hasVideo: true,
        id: 5
    }, {
        author: '张珏',
        songName: '飞行鱼',
        album: '飞行鱼',
        imgSrc: img7,
        hasVideo: false,
        id: 6
    }, {
        author: '袁娅维',
        songName: '如果你听见',
        album: '如果你听见',
        imgSrc: img8,
        hasVideo: false,
        id: 7
    }, {
        author: '陈奕迅',
        songName: '十年',
        album: '十年',
        imgSrc: img9,
        hasVideo: true,
        id: 8
    }, {
        author: '周杰伦',
        songName: '夜曲',
        album: '夜曲',
        imgSrc: img10,
        hasVideo: true,
        id: 9
    }]
};

export default function newestSongList(state = initialState, action) {
    return state
}