import {LANGUAGE} from '../Config/Constant'
const language = localStorage.getItem("language")
console.log(language)
var chosenLanguage = ''
if (!language || language.includes('English')) {
    chosenLanguage = LANGUAGE.en
} else {
    chosenLanguage = LANGUAGE.vn
}
const languageReducer = (state=chosenLanguage, action) => {
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