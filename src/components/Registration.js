import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Registration = () => {
    const navigate = useNavigate()
  return (
    <div className="h-full-view">
        <Header />
        <div class="registration">
            <img class="logo" src={require("../assets/icons/Shield Check.png")} alt="" />
            <h1>Register a new account</h1>
            <p>Already have an account? <a href=".#" onClick={() => {
          navigate("/")
        }}>Log in</a></p>
            <span>
                <input type="text" placeholder="Email Address" />
            </span>
            <span>
                <input type="password" placeholder="Password" />
            </span>
            <button type="submit" className='yellow_button mt-3' onClick={() => {
                    navigate("/")
                }}>Sign Up</button>
        </div>
    </div>
  )
}

export default Registration