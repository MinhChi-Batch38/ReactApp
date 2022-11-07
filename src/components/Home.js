import "./table.css"
import useUsers from "../hooks/use/useUsers";

function Home() {
    const users = useUsers();
    console.log(users);
    return (
        <div className="container-fluid">
            <div className="container p border">
                <ul className="nav">
                    <li className="nav-item first">
                        <img className="logo" src={process.env.PUBLIC_URL + '/logo192.png'} alt="avartar"></img>
                    </li>
                    <li className="nav-item first"><p>Admin</p></li>
                    <li className="nav-item first"><input type="text"></input></li>
                </ul>
            </div>
            <h2>Table Head Colors</h2>
            <p>You can use any of the contextual class to only add a color to the table header:</p>
            <table className="table table-sm table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th className="id">Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                   {users &&  users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                    </tr>
                   ))}

                </tbody>
            </table>

        </div>
    );
}

export default Home;