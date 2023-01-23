import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import './Registration.css';
import Login from './Login';
import Regi from './Regi';
import { Link } from 'react-router-dom';
import HeroImage from './HeroImage';



function Registration() {

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")


  const saveUser = async (e) => {
    e.preventDefault()
    let data = { name, email, password, phone, address }
    await fetch("/register", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((result) => {
      console.log(result)
      if (result.status === 201) {
        window.alert("Successfully Registration")
      } else if (result.status === 409) {
        window.alert("Email or Mobile is already Registered")
      } else {
        window.alert("Invalid Registration Details")
      }
    })

  }
  return (
    <body className="main">
      <form method="POST" className='sign-up'>
        <label className="label">Enter Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <label className="label">Enter Your Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="label">Enter Your Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <label className="label">Enter Your Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label className="label">Set Your Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="butt" type="submit" onClick={saveUser}>Sign-Up</button>
        <Link className="butt" to="/login">Already Sign-up?Sign-in</Link>
      </form>
    </body>
  );
}

export default Registration;
