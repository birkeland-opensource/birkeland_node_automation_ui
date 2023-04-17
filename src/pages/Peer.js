import React from 'react'
import Header from '../components/Header';
import './Peer.css';
import { useNavigate } from 'react-router-dom';

const Peer = () => {
  const navigate = useNavigate()

    return (
        <div>
            <Header />

            <div class="peer-container">
                
                <div class="peer">
                    <div>
                    <p className='w-100 text-right font-28'>Connect to good peers</p>
                        <div class="peer-table">
                            <table>
                                <tr className='table_head'>
                                    <td><label class="cb-container">
                                        <input type="checkbox" />
                                        <span class="cb-checkmark"></span>
                                    </label></td>
                                    <th>Name</th>
                                    <th>Capacity</th>
                                    <th>Status</th>
                                    <td>&bull; &bull; &bull;</td>
                                </tr>
                                <tr>
                                    <td><label class="cb-container">
                                        <input type="checkbox" />
                                        <span class="cb-checkmark"></span>
                                    </label></td>
                                    <td className="bold-font"><img class="profile-img" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />LNConnect <br /><small> 98/100</small></td>
                                    <td>120 BTC</td>
                                    <td class="status">Highly connected</td>
                                    <td>&bull; &bull; &bull;</td>
                                </tr>
                                <tr>
                                    <td><label class="cb-container">
                                        <input type="checkbox" />
                                        <span class="cb-checkmark"></span>
                                    </label></td>
                                    <td className="bold-font"><img class="profile-img" src="https://randomuser.me/api/portraits/women/2.jpg" alt="" />c=<br /><small> 95/100</small></td>
                                    <td>6 BTC</td>
                                    <td class="status">Highly connected</td>
                                    <td>&bull; &bull; &bull;</td>
                                </tr>
                                <tr>
                                    <td>
                                        <label class="cb-container">
                                            <input type="checkbox" />
                                            <span class="cb-checkmark"></span>
                                        </label>
                                    </td>
                                    <td className="bold-font"><img class="profile-img" src="https://randomuser.me/api/portraits/women/10.jpg" alt="" />The Wall <br /> <small> 93/100</small></td>
                                    <td>40 BTC</td>
                                    <td class="status">Highly connected</td>
                                    <td>&bull; &bull; &bull;</td>
                                </tr>
                                <tr>
                                    <td><label class="cb-container">
                                        <input type="checkbox" />
                                        <span class="cb-checkmark"></span>
                                    </label></td>
                                    <td className="bold-font"><img class="profile-img" src="https://randomuser.me/api/portraits/men/16.jpg" alt="" />BIGTIME <br /><small> 85/100</small></td>
                                    <td>2 BTC</td>
                                    <td class="status">Needs inbound liquidity</td>
                                    <td>&bull; &bull; &bull;</td>
                                </tr>
                                <tr>
                                    <td><label class="cb-container">
                                        <input type="checkbox" />
                                        <span class="cb-checkmark"></span>
                                    </label></td>
                                    <td className="bold-font"><img class="profile-img" src="https://randomuser.me/api/portraits/women/11.jpg" alt="" />LNO <br /><small> 92/100</small></td>
                                    <td>8 BTC</td>
                                    <td class="status">Highly connected</td>
                                    <td>&bull; &bull; &bull;</td>
                                </tr>
                            </table>
                        </div>
                    </div>


                    <div className='peer_right'>
                        <span class="input-row">
                            <span class="toggle-container">
                                <label class="toggleswitch">
                                    <input type="checkbox" />
                                    <span class="toggle-slider"></span>

                                </label>
                            </span>
                        </span>
                        <div class="add-peer">
                            <div><p>Manually Add Peers</p></div>
                            <div>
                                <img src={require("../assets/icons/scan.png")} alt="QR code logo" /> <br />
                                <input id="public-key" type="text" placeholder="Public Key" /> <br />
                                <input id="ip-socket" type="text" placeholder="IP:Socket" />
                            </div>
                            <div><button class="add-peer-btn">Add Peer</button></div>
                        </div>
                    </div>
                </div>


                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/transactionloading")
                }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/fundchannel")
                }}>Next</button>
                </div>

            </div>

        </div>
    )
}

export default Peer