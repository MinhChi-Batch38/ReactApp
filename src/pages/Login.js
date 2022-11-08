import "./Login.css"
import { Link } from "react-router-dom"


function Login() {

    const user = {username: '', password: ''}
    const login = () => {

    }
    return (
        <div>
            <form onSubmit="/home">
            <label className="login">Login</label>
            <input type="text" className="username" id="username" 
                onChange={e => {user.username=e.target.value}}
                placeholder="Username"
            />
            <input type="text" className="password" id="password"
                onChange={e => {user.password=e.target.value}}
                placeholder="Password"
            />
            <Link to={'/home'} className="login-link">Login</Link>
            </form>
        </div>
    )
}

export default Login