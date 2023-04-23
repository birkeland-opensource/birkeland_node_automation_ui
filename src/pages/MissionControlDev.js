import React, { useState } from 'react'
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
import { useSelector } from 'react-redux';
import { get_accounting_info } from '../services/api/lightning_node_communication_service';

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

const MissionControlDev = () => {

    const [channel_info_with_accounting, setchannel_info_with_accounting] = useState([]);

    const user_id = useSelector(state => state?.user_id);
    const selectec_node_id = useSelector(state => state?.selected_node_id);
    React.useEffect(() => {
        async function fetchData() {
            let get_object = {
                params: { user_id: user_id,unique_node_id:selectec_node_id }
            }
           let resp = await get_accounting_info(get_object);
           if(resp?.success){
               setchannel_info_with_accounting(resp?.message)
           }
          }
        fetchData();
      }, []);
    

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
                                    <th>Capacity</th>
                                    <th>Inbound</th>
                                    <th>Ratio</th>
                                    <th>Outbond</th>
                                    <th>Total Received</th>
                                    <th>Total Sent</th>
                                    <th>Fee Rate</th>
                                    <th>Net Fees Earned</th>

                                </tr>
                            </thead>
                            {channel_info_with_accounting?.map((item, index) => (<tr className="first_tr" key={index+1}>
                                <td>{item?.id}</td>
                                <td>{item?.capacity}</td>
                                <td className="gradient_text">{item?.remote_balance}</td>
                                <td>---|-----</td>
                                <td>{item?.local_balance}</td>
                                <td>{item?.received}</td>
                                <td>{item?.sent}</td>
                                <td>5ppm</td>
                                <td>{item?.outgoing_info?.total_fee_mtokens / 1000}</td>
                            </tr>))}
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

export default MissionControlDev