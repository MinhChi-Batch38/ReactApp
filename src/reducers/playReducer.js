
const playReducer = (state=false, action) => {
    switch (action.type) {
        case "play": 
            state = action.play
            break
        default:
            break
    }
    return state
}

export default playReducer