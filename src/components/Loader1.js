import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'
import "./Loader.css"

const Loader1 = () => {
  const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div class="container-1 wallet">
                <p>Get inbound liquidity</p>
                <div className='wallet-content liquidity loader-layout my-4'>
                    <span><img class="wallet-img" src={require("../assets/icons/loader.png")} alt="wallet logo" /></span>
                    <h4 className='mt-5'>Success!</h4>
                </div>
                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/liquidity")
                }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/todashboard")
                }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Loader1