import React from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import "./Fund.css"
const FundChannel = () => {
  const navigate = useNavigate()

    return (
        <div>
            <Header />
            <div class="peer-container fund_channel">
                <div>
                    <p className='font-28'>Fund some channels</p>
                </div>
                <div class="peer">
                    <div>
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
                </div>
                <div className='nxt_bck_btn'>
                    <button class="back-btn" type="submit" onClick={() => {
                    navigate("/peer")
                }}>Back</button>
                    <button class="next-btn" type="submit" onClick={() => {
                    navigate("/liquidity")
                }}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default FundChannel