import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import './Login.css';

function Login() {
    const history = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUserData = async (e) => {
        e.preventDefault()
        console.log({ email, password })
        let data = { email, password }
        await fetch("/login", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result)
            if (result.status === 200) {
                result.json().then((resp) => {
                    localStorage.setItem("auth", JSON.stringify(resp.data.token))
                    console.log(resp.data.token)
                })
                window.alert("Successfully LogIn")
                history("/book-list")
            } else {
                window.alert("Invalid Credential")
            }
        })

    }
    return (
        <body className='main'>
            <form method="POST" className='login'>
                <label className="label">Enter Your Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label className="label">Enter Your Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="but" type="submit" onClick={loginUserData}>Log-In</button>
            </form>
        </body>
    );
}

export default Login;
