const initNav = [{
    tabName: '发现',
    active: true,
    router: '/findout',
    id: '0'
}, {
    tabName: 'MV',
    active: false,
    router: '/mv',
    id: '1'
}, {
    tabName: '我的',
    active: false,
    router: '/mine',
    id: '2'
}, {
    tabName: '朋友',
    active: false,
    router: '/friends',
    id: '3'
}, {
    tabName: '账号',
    active: false,
    router: '/account',
    id: '4'
}, {
    tabName: '私人FM',
    active: false,
    router: '/personalFM',
    id: '5'
}];
export default (state = initNav, action) => {
    const { type } = action;
    switch (type) {
        case 'ACTION_SET_NAV':
            return state.map(item => {
               return Object.assign(item, {
                   active: item.id === action.payload
               })
            });
        default:
            return state;
    }
}