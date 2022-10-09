import axios from "axios"

export const fetchUserRequest = () => {
    return {
        type: 'FETCH_USER_REQUEST'
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: user
    }
}

export const fetchUserError = (error) => {
    return {
        type: 'FETCH_USER_ERROR',
        payload: error
    }
}

// Action Creater

const fetchUsers = () => {
    return async (dispatch) => {
        dispatch(fetchUserRequest())
        await axios.get('https://api.spotify.com/v1/me', {
            headers: {
                "Content-Type": "application/json",
                "Authorization" : "Bearer " + "",
            }
        })
        .then ( (response) => {
            console.log(response.data)
            dispatch(fetchUserSuccess(response.data))
        }) .catch ((error) => {
            dispatch(fetchUserError(error))
        })
    }
}

export default fetchUsers