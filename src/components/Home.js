import "./table.css"

function Home() {
    return (
        <div className="container-fluid">
            <div class="container p border">
                <ul className="nav">
                    <li className="nav-item first">
                        <img className="logo" src={process.env.PUBLIC_URL + '/logo192.png'} alt="avartar"></img>
                    </li>
                    <li className="nav-item first"><p>Admin</p></li>
                    <li className="nav-item first"><input type="text"></input></li>
                </ul>
            </div>
            <h2>Table Head Colors</h2>
            <p>You can use any of the contextual classes to only add a color to the table header:</p>
            <table class="table table-sm table-bordered">
                <thead class="table-dark">
                    <tr>
                        <th className="id">Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr>
                    <tr>
                        <td>Mary</td>
                        <td>Moe</td>
                        <td>mary@example.com</td>
                    </tr>
                    <tr>
                        <td>July</td>
                        <td>Dooley</td>
                        <td>july@example.com</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default Home;