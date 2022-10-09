const initialState = {
    loading: false,
    artist: [],
    error: ''
}

export const artistReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ARTIST_REQUEST':
            return {
                ...state, loading: true, 
            }
        case 'SET_ARTIST_SUCCESS':
            return {
                ...state, loading: false, artist: action.payload, error: ''
            }
        case 'SET_ARTIST_FALIURE':
            return {
                ...state, loading: false, artist: [], error: action.payload
            }

        default: return state;

    }
}