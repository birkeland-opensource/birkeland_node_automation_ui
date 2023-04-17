import React from 'react'
import Header from './Header'
import './Scanner.css';
import { useNavigate } from 'react-router-dom';

const Scanner = () => {
  const navigate = useNavigate()

  return (
    <div className="h-full-view">
      <Header />
      <div class="container-1 wallet mt-100">
        <p>Fund your Lightning node</p>
        <div className='wallet-content scanner scanner-layout' onClick={() => {
          navigate("/transactionloading")
        }}>
          <span><img class="wallet-img" src={require("../assets/icons//scan.png")} alt="wallet logo" /></span>
          <button class="back-btn scanner_btn" type="submit">Copy Address</button>
        </div>
        <p className="scanner_para">bc1qhgfrf5nuzz276vglhupxk73u69zagj93csw5qv</p>
        <button class="back-btn" type="submit" onClick={() => {
          navigate("/deposit")
        }}>Back</button>
      </div>
    </div>
  )
}

export default Scanner