
const audioReducer = (state={}, action) => {
    switch (action.type) {
        case "select": 
            state = action.audio
            break
        case "pause": 
            state = action.audio
            break
        default:
            break
    }
    return state
}

export default audioReducer