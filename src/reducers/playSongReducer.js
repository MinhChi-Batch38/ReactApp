
const playSongReducer = (state={}, action) => {
    switch (action.type) {
        case "song-play": 
            state = action.song
            break
        default:
            break
    }
    return state
}

export default playSongReducer