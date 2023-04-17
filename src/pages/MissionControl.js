import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import "./MissionControl.css"
import Header1 from '../components/Header1'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Filler,
    Title,
    Tooltip,
    Legend
);

const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

const MissionControl = () => {
    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 1",
                data: [
                    860,
                    1140,
                    1060,
                    1060,
                    1070,
                    1110,
                    1330,
                    2210,
                    7830,
                    2478,
                    2478,
                    3478
                ],
                borderColor: "#FFBB38",
                fill: true,
                pointRadius: 1,
                backgroundColor: "#FFBB38",
                lineTension: 0.5
            },
            {
                label: "Dataset 2",
                data: [
                    1600,
                    1700,
                    1700,
                    1900,
                    2000,
                    2700,
                    4000,
                    5000,
                    6000,
                    7000,
                    6000,
                    6500
                ],
                borderColor: "#8B98F9",
                fill: true,
                pointRadius: 1,
                backgroundColor: "#8B98F9",
                lineTension: 0.5
            }
        ]
    };
    return (
        <div className='pb-97'>
            <Header1 />
            <div className="data-details mission_control">

                <div><h1>Mission Control</h1>
                </div>
                <div className="container">
                    <div><h2>Channel Overview</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Alies</th>
                                    <th>Score</th>
                                    <th>Inbound</th>
                                    <th>Ratio</th>
                                    <th>Outbond</th>
                                    <th>Fee Rate</th>
                                    <th>Not Fees Earned</th>

                                </tr>
                            </thead>
                            <tr className="first_tr">
                                <td>LNBig</td>
                                <td>70</td>
                                <td className="gradient_text">222,000</td>
                                <td>---|-----</td>
                                <td>500,000</td>
                                <td>5ppm</td>
                                <td>300,324</td>
                            </tr>
                            <tr>
                                <td>Fold</td>
                                <td>66</td>
                                <td className="gradient_text">700,000</td>
                                <td>-----|---</td>
                                <td>300,000</td>
                                <td>25ppm</td>
                                <td>3,324</td>
                            </tr>
                            <tr>
                                <td>Blockdaemon</td>
                                <td>12</td>
                                <td className="gradient_text">8,000</td>
                                <td>-------|-</td>
                                <td>300,000</td>
                                <td>40ppm</td>
                                <td>1,324</td>
                            </tr>
                            <tr>
                                <td>marvin</td>
                                <td>12</td>
                                <td className="gradient_text">8,000</td>
                                <td>----|----</td>
                                <td>10,000</td>
                                <td>0ppm</td>
                                <td>324</td>
                            </tr><tr>
                                <td>Charge LN</td>
                                <td>70</td>
                                <td className="gradient_text">332,000</td>
                                <td>---|-----</td>
                                <td>500,000</td>
                                <td>5ppm</td>
                                <td>300,324</td>
                            </tr>
                            <tr>
                                <td>Birkeland</td>
                                <td>66</td>
                                <td className="gradient_text">555,000</td>
                                <td>-----|---</td>
                                <td>300,000</td>
                                <td>25ppm</td>
                                <td>3,324</td>
                            </tr>
                            <tr>
                                <td>switch-In</td>
                                <td>12</td>
                                <td className="gradient_text">4,000,000</td>
                                <td>-------|-</td>
                                <td>500,000</td>
                                <td>40ppm</td>
                                <td>1,324</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="container1">
                    <h2>Pending Items</h2>
                    <div className="pending-item">
                        <div className="img-box">
                            <img className='mr-4' src={require("../assets/icons/coin.png")} alt="" />
                            <p>+0.1 BTC<br /> Pending Deposit</p>
                        </div>
                        <div className="img-box">
                            <img className='mr-4' src={require("../assets/icons/pending.png")} alt="" />
                            <p>2 Pending <br />Channels</p>
                        </div>
                    </div>
                </div>
                <div className="container2" >
                    <h2 className='mb-0'>Analytics</h2>
                    <div className="analytics">
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <div className="box box1">

                                <table className='w-100'>
                                    <th>Revenue</th>
                                    <tr>
                                        <td>Forwarding Fee</td>
                                        <td className='text-right'>5,000</td>
                                    </tr>
                                    <th>Expenses</th>
                                    <tr>
                                        <td>Rebalancing</td>
                                        <td className='text-right'>900</td>
                                    </tr>
                                    <tr>
                                        <td>Open/Close Channels</td>
                                        <td className='text-right'>873</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td className='text-right'>1,773</td>
                                    </tr>
                                    <th>Profit</th>
                                    <tr>
                                        <td>Total</td>
                                        <td className='text-right'>3,227</td>
                                    </tr>
                                    <tr>
                                        <td>Gross Profit Margin</td>
                                        <td className='text-right'>1,773</td>
                                    </tr>
                                </table>

                            </div>
                            <div className="box2 graph">
                                {/* <img src={require("../assets/icons/Graph.png")} alt="" /> */}
                                <h3>Revenue & Expenses Graph</h3>
                                <Line
                                    data={{
                                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                                        datasets: [{
                                            label: 'Dataset 1',
                                            data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478, 2478, 2478],
                                            borderColor: "#FFBB38",
                                            fill: true,
                                            pointRadius: 1,
                                            backgroundColor: "#FFBB38",
                                            lineTension: 0.5
                                        }, {
                                            label: 'Dataset 2',
                                            data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000, 6000, 5500],
                                            borderColor: "#8B98F9",
                                            fill: true,
                                            pointRadius: 1,
                                            backgroundColor: "#8B98F9",
                                            lineTension: 0.5
                                        }]
                                    }}
                                    options={{
                                        responsive: true,
                                        plugins: {
                                            legend: {
                                                display: false,
                                            },
                                        },
                                    }}
                                />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center w-100 mt-4">
                            <div className="box box3">

                                <table className='w-100'>
                                    <th>Summary</th>
                                    <tr>
                                        <td className='summary_top'>Revenue</td>
                                        <td className='text-right'>5,000</td>
                                    </tr>
                                    <tr>
                                        <td>Amount</td>
                                        <td className='text-right'>16,342,034</td>
                                    </tr>
                                    <tr>
                                        <td>Transaction</td>
                                        <td className='text-right'>1369</td>
                                    </tr>
                                    <tr>
                                        <td>Average Fee</td>
                                        <td className='text-right'>178</td>
                                    </tr>
                                </table>

                            </div>
                            <div className="box box4">Balance: 5,000,000 sats <br />
                                Deposit: 4,000,000 sats <br />
                                Growth: 20% YTD
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MissionControl