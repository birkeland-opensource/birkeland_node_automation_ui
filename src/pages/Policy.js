import React, { useState } from 'react'
import Header1 from '../components/Header1';
import './Policy.css'

const Policy = () => {
    const [p1, setP1] = useState(75)
    const [p2, setP2] = useState(55)
    return (
        <div className='policy'>
            <Header1 />
            <div className="data_detail">

                <div>
                    <h1>Policy</h1>
                </div>
                <div className="policy-container">
                    <div className="slidecontainer">
                        <table className="policy-tbl">
                            <tr>
                                <td className="detail-row">Maximal channel imbalance measure</td>
                                <td className="input-row">
                                    <div className="cybot d-flex card-content flex-column">
                                        <div className='w-100 position-relative custom-slide-input'>
                                            <input type="range" onChange={e => setP1(e.target.value)} className="w-100 range-input" value={p1} style={{ background: `linear-gradient(to right, #FEA321 0%, #FEA321 ${p1}%, #221956 ${p1}%, #221956 100%)` }} />
                                        </div>
                                        <div className="d-flex justify-content-between progress-content">
                                            <p id='rangeValue'>{p1}%</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Frequency of active rebalning</td>
                                <td className="input-row">
                                    <div className="cybot d-flex card-content flex-column">
                                        <div className='w-100 position-relative custom-slide-input'>
                                            <input type="range" onChange={e => setP2(e.target.value)} className="w-100 range-input1" value={p2} style={{ background: `linear-gradient(to right, #FEA321 0%, #FEA321 ${p2}%, #221956 ${p2}%, #221956 100%)` }} />
                                        </div>
                                        <div className="d-flex justify-content-between progress-content">
                                            <p>Every {p2/10} hours</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Passive rebalancing</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" />
                                            <span className="toggle-slider"></span>

                                        </label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Operate on clearnet</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Operate on Tor</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Collect analytics on peers</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Share data with peers</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Automatically connect to new peers</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" />
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button className="save-change-btn">Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Policy