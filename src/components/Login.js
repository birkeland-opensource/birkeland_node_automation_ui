import React, { useState } from 'react';
import './Login.css'
import Header from './Header'
import { useNavigate } from 'react-router-dom';
import { login_user_service } from '../services/api/user_management_service';

const Login = (props) => {
    const {set_user_id} = props;
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showloadingDialog, setShowloadingDialog] = useState(false)

    const login_user = async () => {
        if (email.length < 1 || password.length < 1) {
            alert("All fields are needed");
            return;
          }
      
          let loginObject = {
            email: email,
            password: password,
          };

        let res =  await login_user_service(loginObject);
        
        if(res.success){
            sessionStorage.setItem('token', res.message?.message?.token);
            set_user_id(res.message?.message?.business_user_id);
            window.location.reload();
        }
       
       

    }

    return (
        <div className="h-full-view">
            <Header />
            <div className="registration">
                <img className="logo" src={require("../assets/icons/Shield Check.png")} width="185px" height="43px" alt="" />
                <h1>Log in to your account</h1>
                <p>Don't have an account?&nbsp;<a href="/register" onClick={() => {
          navigate("/register")
        }}>Sign up</a></p>
                <span>
                    <input value={email} onChange={(e) => {setEmail(e.target.value)}}type="text" placeholder="Email Address" />
                </span>
                <span>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
                </span>
                <div className="checkbox">
                    <span className='remember_me'>
                        <input type="checkbox" id="remember-me" />
                        <label for="remember-me">Remember me</label>
                    </span>
                    <span className="pass-link">
                        <a href="/reset-password">Forgot your password?</a>
                    </span>
                </div>
                <button className='yellow_button' onClick={() => login_user()}>Log in</button>
            </div>
        </div>
    )
}

export default Login