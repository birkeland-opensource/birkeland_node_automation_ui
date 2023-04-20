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
import "./Connect.css"
import Header1 from './Header1'

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

const ConnectNode = () => {
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

                <div><h1>Manage Your Nodes</h1>
                </div>
                <div className="container">
                    <div><h2>Manage</h2>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Alias</th>
                                    <th>Control</th>
                                    <th>Delete</th>
                                

                                </tr>
                            </thead>
                            <tr className="first_tr">
                                <td>LNBig</td>
                                <td>70</td>
                                <td className="gradient_text">222,000</td>
                                <td>---|-----</td>
                            </tr>
                            <tr>
                                <td>Fold</td>
                                <td>66</td>
                                <td className="gradient_text">700,000</td>
                                <td>-----|---</td>
                            </tr>
                            <tr>
                                <td>Blockdaemon</td>
                                <td>12</td>
                                <td className="gradient_text">8,000</td>
                                <td>-------|-</td>
                            </tr>
                            <tr>
                                <td>marvin</td>
                                <td>12</td>
                                <td className="gradient_text">8,000</td>
                                <td>----|----</td>
                            </tr><tr>
                                <td>Charge LN</td>
                                <td>70</td>
                                <td className="gradient_text">332,000</td>
                                <td>---|-----</td>
                            </tr>
                            <tr>
                                <td>Birkeland</td>
                                <td>66</td>
                                <td className="gradient_text">555,000</td>
                                <td>-----|---</td>
                            </tr>
                            <tr>
                                <td>switch-In</td>
                                <td>12</td>
                                <td className="gradient_text">4,000,000</td>
                                <td>-------|-</td>
                            </tr>
                        </table>
                    </div>
                    <button className='yellow_button mt-3'>Add</button>
                </div>
           
            </div>
        </div>
    )
}

export default ConnectNode