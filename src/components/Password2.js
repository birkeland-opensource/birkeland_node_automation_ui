import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Password2 = () => {
  const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div class="container-2">
                <p>Set a password to unlock <br />your node over tor</p>
                <div>
                    <img src={require("../assets/icons/Shield Check.png")} alt="" />
                </div>
                <span>
                    <input type="password" placeholder="Password" />
                </span>
                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/lightningnode")
                }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/deposit")
                }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Password2