import React from 'react';
import './Onboarding.css';
import Header from './Header'
import { useNavigate } from 'react-router-dom';

const Onboarding = () => {
    const navigate = useNavigate()
    return (
        <div className="h-full-view">

            <Header />
            <div className="container-1">
                <p>Let's get your Lightning
                    <br /> node up and running</p>
       
                <h4>Onboarding Steps</h4>
              <div className='px-4'>
              <ol>
                    <li>Create your wallets and save your seed phrase.</li>
                    <li>Fund your Lightning node.</li>
                    <li>Find good peers to connect with</li>
                    <li>Deploy liquidity by funding some channels.</li>
                    <li>Optimize your node over time.</li>
                </ol>
              </div>

                <button className="start-btn yellow_button" type="submit" onClick={() => {
          navigate("/wallet")
        }}>Start</button>
            </div>
        </div>
    )
}

export default Onboarding