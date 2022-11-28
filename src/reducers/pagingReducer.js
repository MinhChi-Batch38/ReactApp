
const pageNumberReducer = (state=1, action) => {
    switch (action.type) {
        case "previous": 
            state = state-1
            break
        case "next": 
            state = state+1
            break
        default:
            state = 1
            break
    }
    return state
}

export default pageNumberReducer