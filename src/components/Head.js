import { SESSION_USER } from "../pages/Login";
import { Link } from "react-router-dom";
import "./table.css"


function Head() {
    const user = JSON.parse(sessionStorage.getItem(SESSION_USER))
    return (
        <div className="container">
            <Link to="/home"><i className="fa-brands fa-soundcloud fa-4x logo" style={{width:100, height: 50}}></i></Link>
            <input className="search" id="keyword" name="keyword" placeholder="Search" />
            <i className='fas fa-search search'></i>
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