export default function (state = null, action) {
    switch (action.type) {
        case 'GAME_SELECTED':
            return state = action.payload
        default:
            return state
        
    }   
}