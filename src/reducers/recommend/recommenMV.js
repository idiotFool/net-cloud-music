import mvImg1 from '../../img/mv1.jpg'
import mvImg2 from '../../img/mv2.jpg'
import mvImg3 from '../../img/mv3.jpg'
import mvImg4 from '../../img/mv4.jpg'
import mvImg5 from '../../img/mv6.jpg'
import mvImg6 from '../../img/mv6.jpg'
import mvImg7 from '../../img/mv7.jpg'
import mvImg8 from '../../img/mv8.jpg'

const initialState = {
    title: '推荐MV',
    list: [{
        desc: 'Ukuguqi dostumga',
        imgSrc: mvImg1,
        author: 'ahmatjan',
        watchTimes: 644,
        id: 0,
    }, {
        desc: 'Everthing Is Falling (live)',
        imgSrc: mvImg2,
        author: 'Tom The Suit Forest',
        watchTimes: 1145,
        id: 1
    }, {
        desc: 'ONE(Lucid Dream) | Day6的kiss',
        imgSrc: mvImg3,
        author: 'LUCY',
        watchTimes: 444,
        id: 2
    }, {
        desc: '第三届硬地围炉夜 | 裘德',
        imgSrc: mvImg7,
        author: '裘德',
        watchTimes: 2056,
        id: 3
    }, {
        desc: '第三届硬地围炉夜 | 葛东琪/闫永强',
        imgSrc: mvImg8,
        author: '葛东琪/闫永强',
        watchTimes: 70552,
        id: 4
    }, {
        desc: '第三届硬地围炉夜 | 王嘉尔',
        imgSrc: mvImg4,
        author: '王嘉尔',
        watchTimes: 21774,
        id: 5
    }, {
        desc: 'F Love',
        imgSrc: mvImg5,
        author: 'Luh Kei',
        watchTimes: 1733,
        id: 6
    }, {
        desc: 'Overrated - Tarzan Choreography',
        imgSrc: mvImg6,
        author: '1 MILLION',
        watchTimes: 333,
        id: 7
    }]
};

export default function recommendMV(state=initialState, action) {
    return state;
}