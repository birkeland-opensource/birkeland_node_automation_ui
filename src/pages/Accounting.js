import React from 'react';
import './Accounting.css'
import Header1 from '../components/Header1';

const Accounting = () => {
    return (
        <div>
            <Header1 />
            <div class="account-div1">
                <div class="account-div">
                    <div class="acc1 blnc-div" ><p>Balance: 5,000,000 sats <br />
                        Deposit: 4,000,000 sats <br />
                        Growth: 20% YTD</p>
                    </div>
                </div>
                <div >
                    <div class="account-div" >
                        <div class="acc deposit-div">
                            <a class="pay" href=".#">
                                <p>Deposit</p>
                                <img src={require("../assets/icons/deposit.png")} alt="deposit logo" />
                            </a>
                        </div>
                        <div class="acc withdraw-div">
                            <a class="pay" href=".#">
                                <p>Withdrawal</p>
                                <img src={require("../assets/icons/deposit.png")} alt="withdraw logo" />
                            </a>
                        </div>
                    </div>
                    <div class="account-div" >
                        <div class="acc onchain-div">
                            <a class="pay" href=".#">
                                <p>On-Chain <br /> Payment</p>
                                <img src={require("../assets/icons/coin.png")} alt="deposit logo" />
                            </a>
                        </div>
                        <div class="acc light-div">
                            <a class="pay" href=".#">
                                <p>Lightning <br /> Payment</p>
                                <img src={require("../assets/icons/lightning.png")} alt="withdraw logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Accounting