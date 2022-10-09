export const setQuery = (query) => {
    return {
        type: 'SET_QUERY',
        payload: query
    }
}

const Querify = () => {
    return dispatch => {
        setQuery()
    }
}

export default Querify