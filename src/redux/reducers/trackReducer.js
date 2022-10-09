const initialState = {
    loading: false,
    tracks: [],
    error: ''
}

export const trackReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_TRACKS_REQUEST':
            return {
                ...state, loading: true, 
            }
        case 'SET_TRACK_SUCCESS':
            return {
                ...state, loading: false, tracks: action.payload, error: ''
            }
        case 'SET_TRACK_FALIURE':
            return {
                ...state, loading: false, tracks: [], error: action.payload
            }

        default: return state;

    }
}