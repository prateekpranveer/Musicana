const initialState = {
    device_id: ''
}


export const deviceReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_DEVICE':
            return {
                ...state, device_id: action.payload
            }
        default:
            return state;
    }
}