import React from 'react';
import './Password1.css'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Password1 = () => {
  const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div class="container-2">
                <p>Set a password for your <br /> Bitcoin wallet</p>
                <div>
                    <img src={require("../assets/icons/Shield Check.png")} alt="" />
                </div>
                <span>
                    <input type="password" placeholder="Password" />
                </span>
                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
          navigate("/wallet")
        }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
          navigate("/seedphrase")
        }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Password1