const initialState = {
    title: '最新音乐',
    list: [{
        author: '郭顶',
        songName: '_5:15',
        album: '_5:15',
        imgSrc: '',
        hasVideo: false,
        id: 0,
    }, {
        author: '欧阳娜娜',
        songName: '无名浪潮',
        album: 'NANA 3',
        imgSrc: '',
        hasVideo: false,
        id: 1
    }, {
        author: '魏如萱/裘德',
        songName: '四月是适合说谎的日子',
        album: '四月是适合说谎的日子',
        imgSrc: '',
        hasVideo: false,
        id: 2
    }, {
        author: '张也/周深',
        songName: '灯火里的中国',
        album: '灯火里的中国',
        imgSrc: '',
        hasVideo: false,
        id: 3
    }, {
        author: 'LiSA',
        songName: 'Another Great Day',
        album: 'Another Great Day',
        imgSrc: '',
        hasVideo: true,
        id: 4
    }, {
        author: '毛不易',
        songName: '火花',
        album: '火花',
        imgSrc: '',
        hasVideo: true,
        id: 5
    }, {
        author: '张珏',
        songName: '飞行鱼',
        album: '飞行鱼',
        imgSrc: '',
        hasVideo: false,
        id: 6
    }, {
        author: '袁娅维',
        songName: '如果你听见',
        album: '如果你听见',
        imgSrc: '',
        hasVideo: false,
        id: 7
    }, {
        author: '陈奕迅',
        songName: '十年',
        album: '十年',
        imgSrc: '',
        hasVideo: true,
        id: 8
    }, {
        author: '周杰伦',
        songName: '夜曲',
        album: '夜曲',
        imgSrc: '',
        hasVideo: true,
        id: 9
    }]
};

export default function newestSongList(state = initialState, action) {
    return state
}