const initialState = {
    currentTrack: null,
    is_playing: false,
    currentVolume: 0.5,
    listening_On: null,
}


export const musicanaReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_TRACK':
            return {
                ...state, currentTrack: action.payload, is_playing: true
            }

        case 'SET_PLAY':
            return {
                ...state, is_playing: true
            }

        case 'SET_PAUSE':
            return {
                ...state, is_playing: false
            }
        case 'SET_DEVICE':
            return {
                ...state, listening_On: action.payload
            }
        default:
            return state
    }
}