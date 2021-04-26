import mvImg1 from '../img/mv1.jpg'
import mvImg2 from '../img/mv2.jpg'
import mvImg3 from '../img/mv3.jpg'
import mvImg4 from '../img/mv4.jpg'
import mvImg5 from '../img/mv6.jpg'
import mvImg6 from '../img/mv6.jpg'

const initialState = {
    title: '主播电台',
    list: [{
        desc: '读到泪目德博士论文致谢',
        imgSrc: '',
        title: '晚安歌词',
        id: 0,
    }, {
        desc: 'AY 杨老三来电：春日黄金“狗粮”大放送',
        imgSrc: '',
        title: '音乐来电',
        id: 1
    }, {
        desc: '遗尘漫步-主界面',
        imgSrc: '',
        title: '《明日方舟》游戏原声OST',
        id: 2
    }, {
        desc: '《三和桥上》王巨星',
        imgSrc: '',
        title: '王巨星的电台',
        id: 3
    }, {
        desc: '90后独居男女对聊：一个人住有想象中的好吗',
        imgSrc: '',
        title: '真故电台',
        id: 4
    }, {
        desc: 'overturned clock',
        imgSrc: '',
        title: 'mess land',
        id: 5
    }]
};

export default function radioAnchor(state=initialState, action) {
    return state;
}