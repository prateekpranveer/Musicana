const initialState = {
        active: "songs"
}


export const navReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_SONG_ACTIVE':
            return {
                ...state,
                active: "songs",
            }

        case 'SET_PLAYLIST_ACTIVE':
            return {
                ...state,
                active: "playlists"
            }
        case 'SET_ALBUM_ACTIVE':
            return {
                ...state,
                active: "albums"
            }
        case 'SET_ARTIST_ACTIVE':
            return {
                ...state,
                active: "artists"
            }
        default:
            return state;
        
    }
}