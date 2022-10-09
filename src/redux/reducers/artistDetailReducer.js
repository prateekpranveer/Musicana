const initialState = {
    artistDetail: {},
    artistDetailState: false
}

export const artistDetailReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_ARTIST_DETAIL_TRUE':
            return {
                ...state, artistDetail: action.payload, artistDetailState: true
            }
        case 'SET_ARTIST_DETAIL_FALSE':
            return {
                ...state, artistDetail: {}, artistDetailState: false
            }
        default:
             return state;
    }
}