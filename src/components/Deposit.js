import React from 'react'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

const Deposit = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full-view">
        <Header />
         <div class="container-1 wallet">
            <p>Fund your Lightning node</p>


            <div className='wallet-content mt-5' onClick={() => {
                    navigate("/scan")
                }}>
                <h4>Deposit</h4>
                <span><img class="wallet-img" src={require("../assets/icons/deposit.png")} alt="wallet logo" /></span>
            </div>
            <button class="back-btn" type="submit" onClick={() => {
                    navigate("/pswd")
                }}>Back</button>
        </div>
    </div>
  )
}

export default Deposit