
const searchReducer = (state='', action) => {
    switch (action.type) {
        case "change": 
            state = action.keywords
            break
        default:
            state = ''
            break
    }
    return state
}

export default searchReducer