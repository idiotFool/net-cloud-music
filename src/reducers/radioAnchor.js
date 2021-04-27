import rImg1 from '../img/radio1.jpg'
import rImg2 from '../img/radio2.jpg'
import rImg3 from '../img/radio3.jpg'
import rImg4 from '../img/radio4.jpg'
import rImg5 from '../img/radio6.jpg'
import rImg6 from '../img/radio6.jpg'

const initialState = {
    title: '主播电台',
    list: [{
        desc: '读到泪目德博士论文致谢',
        imgSrc: rImg1,
        title: '晚安歌词',
        id: 0,
    }, {
        desc: 'AY 杨老三来电：春日黄金“狗粮”大放送',
        imgSrc: rImg2,
        title: '音乐来电',
        id: 1
    }, {
        desc: '遗尘漫步-主界面',
        imgSrc: rImg3,
        title: '《明日方舟》游戏原声OST',
        id: 2
    }, {
        desc: '《三和桥上》王巨星',
        imgSrc: rImg4,
        title: '王巨星的电台',
        id: 3
    }, {
        desc: '90后独居男女对聊：一个人住有想象中的好吗',
        imgSrc: rImg5,
        title: '真故电台',
        id: 4
    }, {
        desc: 'overturned clock',
        imgSrc: rImg6,
        title: 'mess land',
        id: 5
    }]
};

export default function radioAnchor(state=initialState, action) {
    return state;
}