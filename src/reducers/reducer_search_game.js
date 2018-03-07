export default function (state = '', action) {
    switch (action.type) {
        case 'SEARCH_REQUEST_GAME':
            return state = {
                ...state,
                loading: true
            }
        case 'SEARCH_SUCCESS_GAME':
           return state = {
                ...state,
                loading: false,
                games: action.data !== undefined ? action.data: null
            }
        case 'SEARCH_ERROR_GAME' :
            return state = {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}