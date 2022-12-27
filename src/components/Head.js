import { SESSION_USER } from "../pages/Login/Login";
import { useNavigate } from "react-router-dom";
import "./table.css"
import { useState } from "react";
import { useDispatch } from "react-redux";

function Head() {
    const user = JSON.parse(sessionStorage.getItem(SESSION_USER))
    const dispatch = useDispatch()
    const [kw, setKw] = useState('')
    const navigate = useNavigate()
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
    return (
        <div className="container-header">
            <i className="fa-brands fa-soundcloud fa-4x logo" style={{ width: 100, height: 50 }}
                onClick={handleLogoOnClick}></i>
            <input className="search" id="keyword" name="keyword" placeholder="Search" 
                onChange={e => handleOnChange(e.target.value )}
                value={kw}
            />
            <i className='fas fa-search search' onClick={handleOnClick}></i>
            <i className="glyphicon glyphicon-user user"></i>
            {user && <label className="user">{user.username}</label>}
            <label className="language"> Language: </label>
            <select>
                <option>English</option>
            </select>
        </div>
    );
}

export default Head;