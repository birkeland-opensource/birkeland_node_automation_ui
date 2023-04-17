import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import "./Loader.css"

const Loader2 = () => {
  const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div class="container-1 wallet mt-100">
                <p>Fund your Lightning node</p>
                <div className='wallet-content loader-layout-2'>
                    <span><img class="wallet-img" src={require("../assets/icons/loader.png")} alt="wallet logo" /></span>
                    <h4 className='mt-5'>Success!<br />0.01 BTC funded<br />Transaction pending confirmations </h4>
                </div>
                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/scan")
                }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/peer")
                }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Loader2