import React from 'react';
import './BitcoinWallet.css'
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const BitcoinWallet = () => {
  const navigate = useNavigate()
  return (
    <div className="h-full-view">
        <Header />
         <div class="container-1 wallet">
            <p>Create a Bitcoin wallet</p>


            <div className='wallet-content mt-5' onClick={() => {
          navigate("/password")
        }}>
                <h4>Generate<br /> Wallet</h4>
                <span><img class="wallet-img" src={require("../assets/icons/wallet.png")} alt="wallet logo" /></span>
            </div>
            <button class="back-btn" type="submit" onClick={() => {
          navigate("/onboarding")
        }}>Back</button>
        </div>
    </div>
  )
}

export default BitcoinWallet