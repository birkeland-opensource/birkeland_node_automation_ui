import React from 'react';
import './Login.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div className="registration">
                <img className="logo" src={require("../assets/icons/Shield Check.png")} width="185px" height="43px" alt="" />
                <h1>Log in to your account</h1>
                <p>Don't have an account?&nbsp;<a href=".#" onClick={() => {
          navigate("/register")
        }}>Sign up</a></p>
                <span>
                    <input type="text" placeholder="Email Address" />
                </span>
                <span>
                    <input type="password" placeholder="Password" />
                </span>
                <div className="checkbox">
                    <span className='remember_me'>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </span>
                    <span className="pass-link">
                        <a href=".#">Forgot your password?</a>
                    </span>
                </div>
                <button type="submit" className='yellow_button' onClick={() => {
          navigate("/onboarding")
        }}>Log in</button>
            </div>
        </div>
    )
}

export default Login