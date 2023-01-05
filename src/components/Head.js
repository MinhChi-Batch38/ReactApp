// import { SESSION_USER } from "../pages/Login/Login";
import { useNavigate } from "react-router-dom";
import "./table.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LANGUAGE } from "../Config/Constant";
import { useSelector } from "react-redux";

function Head() {
    //const user = JSON.parse(sessionStorage.getItem(SESSION_USER))
    const language = useSelector(state => state.language)
    const dispatch = useDispatch()
    const [kw, setKw] = useState('')
    const navigate = useNavigate()
    const english = language.ChosenLanguage.includes('English')
    const handleLogoOnClick = () => {
        setKw('')
        dispatch({"type":"change", "keywords": ''})
        navigate('/home')
    }
    const handleOnChange = (value) => {
        setKw(value)
        console.log(kw)    
    }
    const handleOnClick = () => {
        dispatch({"type":"change", "keywords": kw})
        navigate('/home')
    }
    const handleOnLanguageChange = value => {
        if (value.includes('English')) {
            localStorage.setItem('language', 'English')
            dispatch({"type":"change-language", "language": LANGUAGE.en})
        }
        else {
            localStorage.setItem('language', 'Vietnamese')
            dispatch({"type":"change-language", "language": LANGUAGE.vn})
        }
        
    }
    return (
        <div className="container-header">
            <i className="fa-brands fa-soundcloud fa-4x logo" style={{ width: 100, height: 50 }}
                onClick={handleLogoOnClick}></i>
            <input className="search" id="keyword" name="keyword" placeholder={language.Search}
                onChange={e => handleOnChange(e.target.value )}
                value={kw}
            />
            <i className='fas fa-search search' onClick={handleOnClick}></i>
            <label className="language"> {language.Language}: </label>
            <select onChange={e => handleOnLanguageChange(e.target.value)}>
                <option selected={english}>English</option>
                <option selected={!english}>Tiếng Việt</option>
            </select>
        </div>
    );
}

export default Head;