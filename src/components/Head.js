import "./table.css"

function Head() {

    return (
        <div className="container">
            <i className="glyphicon glyphicon-user user"></i>
            <label className="user">Admin</label>
            <label className="language">| Language: </label>
            <select>
                <option>English</option>
            </select>
        </div>
    );
}

export default Head;