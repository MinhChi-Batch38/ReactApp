
const pageSizeReducer = (state=10, action) => {
    switch (action.type) {
        case "change": 
            state = action.value
            break
        default:
            state = 10
            break
    }
    return state
}

export default pageSizeReducer