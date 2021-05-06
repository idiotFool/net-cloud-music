import { SONG_TYPE } from '../../actions/songList/actionTypes';

const initialState = {
    type: '华语'
};

export default function songType(state=initialState, action) {
    switch (action.type) {
        case SONG_TYPE:
            return {...state, type: action.payload};
        default:
            return state;
    }
}