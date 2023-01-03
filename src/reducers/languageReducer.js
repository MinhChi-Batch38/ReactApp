import {LANGUAGE} from '../Config/Constant'

const languageReducer = (state=LANGUAGE.en, action) => {
    switch (action.type) {
        case "change-language": 
            state = action.language
            break
        default:
            break
    }
    return state
}

export default languageReducer