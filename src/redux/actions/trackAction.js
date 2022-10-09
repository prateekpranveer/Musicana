export const fetchTrackRequest = () => {
    return {
        type: 'FETCH_TRACK_REQUEST'
    }
}

export const fetchTrackSuccess = (track) => {
    return {
        type: 'FETCH_TRACK_SUCCESS',
        payload: track
    }
}

export const fetchTrackFaliure = (error) => {
    return {
        type: 'FETCH_TRACK_FALIURE',
        payload: error
    }
}
