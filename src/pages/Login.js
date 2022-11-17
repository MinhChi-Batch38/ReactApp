import "./Login.css"
//import { redirect } from "react-router-dom"
import {httpGetUserByUsernameAndPassword} from '../hooks/requests/demo.js'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"

export const SESSION_USER = 'user'

function Login() {
    const navigate = useNavigate()
    const [user, setUser] = useState({})
    const login =  async () => {
        const check = await httpGetUserByUsernameAndPassword(user)
        if (!check) {
            return alert("Username or Password is invalid!")
        }
        sessionStorage.setItem(SESSION_USER, JSON.stringify(user))
        navigate('/home');
    }
    return (
        <div>
            <label className="login">Login</label>
            <input type="text" className="username" id="username" 
                onChange={e => setUser((pre) => {
                    pre.username = e.target.value
                    return pre
                })}
                placeholder="Username"
            />
            <input type="text" className="password" id="password"
                onChange={e => setUser((pre) => {
                    pre.password = e.target.value
                    return pre
                })}
                placeholder="Password"
            />
            <button className="login-link" onClick={login}>Login</button>
        </div>
    )
}

export default Login