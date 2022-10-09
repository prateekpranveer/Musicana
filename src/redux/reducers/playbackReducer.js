const initialState = {
    playback: {}
}

export const playbackReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PLAY':
            return {
                ...state, playback: action.payload
            }
        case 'SET_PAUSE':
            return {
                ...state, playback: action.payload
            }
        default:
            return state
    }
}