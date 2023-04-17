import React from 'react'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import "./Liquidity.css"
const Liquidity = () => {
  const navigate = useNavigate()

    return (
        <div className="h-full-view">
            <Header />
            <div class="container-1 wallet">
                <p>Get inbound liquidity</p>
                <div className='wallet-content liquidity lq-layout mt-5'>
                    <h4 className='mb-3'>Request for <br />Liquidity</h4>
                    <span><img class="wallet-img" src={require("../assets/icons/liquidity.png")} alt="wallet logo" /></span>
                </div>
                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/fundchannel")
                }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/loading")
                }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Liquidity