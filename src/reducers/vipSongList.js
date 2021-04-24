import vipSong1 from '../img/vipsong1.jpg';
import vipSong2 from '../img/vipsong2.jpg';
import vipSong3 from '../img/vipsong3.jpg';
import vipSong4 from '../img/vipsong4.jpg';

const initialState = {
    title: '独家放送',
    list: [{
        desc: '《超级对面》第234期 莫文蔚哦：因一个人，留一滴泪',
        imgSrc: vipSong1,
        id: 0,
    }, {
        desc: '《超级对面》第233期 梦龙乐队：凤凰涅槃，重磅回归',
        imgSrc: vipSong2,
        id: 1
    }, {
        desc: '第232期 Dua Lipa：《Future》改变了我的人生',
        imgSrc: vipSong3,
        id: 2
    }, {
        desc: '岁末特别企划EP01：爆款新声 刘大壮出街突袭',
        imgSrc: vipSong4,
        id: 3
    }]
}

export default function vipSongList(state=initialState, action) {
    return state
}