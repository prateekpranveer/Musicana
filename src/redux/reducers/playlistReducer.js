const initialState = {
    loading: false,
    playlist: [],
    error: ''
}

export const playlistReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_PLAYLIST_REQUEST':
            return {
                ...state, loading: true, 
            }
        case 'SET_PLAYLIST_SUCCESS':
            return {
                ...state, loading: false, playlist: action.payload, error: ''
            }
        case 'SET_PLAYLIST_FALIURE':
            return {
                ...state, loading: false, playlist: [], error: action.payload
            }

        default: return state;

    }
}