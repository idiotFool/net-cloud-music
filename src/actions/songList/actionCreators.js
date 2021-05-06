import { SONG_TYPE } from './actionTypes'

export const changeSongType = function(songType) {
    return {
        type: 'SONG_TYPE',
        payload: songType
    }
}