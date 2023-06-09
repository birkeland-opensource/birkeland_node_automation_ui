import React, { useState } from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./MissionControl.css";
import Header1 from "../components/Header1";
import { useSelector } from "react-redux";
import { call_grpc_ops, get_accounting_info, get_forwards, get_rebalance_fee } from "../services/api/lightning_node_communication_service";
import { extract_fee_earned_channel_opening_cost, getDateRange, get_fee_earned_from_forwards } from "../services/support_functions";

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
  "Dec",
];

const MissionControlDev = () => {
  const [channel_info_with_accounting, setchannel_info_with_accounting] =useState(null);
  const [channle_opening_fee_earned, setChannle_opening_fee_earned] = useState(null);
  const [wallet_balance_info, setWallet_balance_info] = useState(null);
  const [generic_node_info, set_generic_node_info] = useState(null);
  const [rebalance_cost, set_rebalance_cost] = useState(null);
  const [fee_earned, setfee_earned] = useState(null)
    

  const user_id = useSelector((state) => state?.user_id);
  const selectec_node_id = useSelector((state) => state?.selected_node_id);
  React.useEffect(() => {
    const fetchDataAsync = async () => {
      let { start_date, end_date } = getDateRange(60);
      let get_object = {
        params: {
          user_id: user_id,
          unique_node_id: selectec_node_id,
          start_date: start_date,
          end_date: end_date,
        },
      };
      let resp = await get_accounting_info(get_object);
      if (resp?.success) {
        setchannel_info_with_accounting(resp?.message?.channels);
        let fee_and_cost = extract_fee_earned_channel_opening_cost(resp?.message?.channels);
        setChannle_opening_fee_earned(fee_and_cost);
      }
    };
    if (!channel_info_with_accounting) {
      fetchDataAsync();
    }
  }, []);
  
  React.useEffect(() => {
    const fetchDataAsync = async () => {

      let req_obj = {
        user_id: user_id,
        unique_node_id: selectec_node_id,
        operation : "wallet_balance_grpc"
      }
      let resp = await call_grpc_ops(req_obj);

      setWallet_balance_info(resp.message)
    }
    if(!wallet_balance_info){
        fetchDataAsync();
    }
    
},[])

React.useEffect(() => {
    const fetchDataAsync = async () => {

      let req_obj = {
        user_id: user_id,
        unique_node_id: selectec_node_id,
        operation : "get_info_grpc"
      }
      let resp = await call_grpc_ops(req_obj);
      set_generic_node_info(resp.message)
    }
    if(!generic_node_info)
      {
        fetchDataAsync();
      }
    
},[])

React.useEffect(() => {
  const fetchDataAsync = async () => {
    let { start_date, end_date } = getDateRange(60);
    let req_obj = {
      params  : {user_id: user_id,
      unique_node_id: selectec_node_id,
      start_date: start_date}
    }
    let resp = await get_rebalance_fee(req_obj);
    set_rebalance_cost(resp.message)
  }
  if(!generic_node_info)
    {
      fetchDataAsync();
    }
  
},[])





React.useEffect(() => {
  const fetchDataAsync = async () => {
    let { start_date, end_date } = getDateRange(60);
    let req_obj = {
      params  : {user_id: user_id,
      unique_node_id: selectec_node_id,
      start_date: start_date, end_date : end_date}
    }
    let resp = await get_forwards(req_obj);
   let fee_earned = get_fee_earned_from_forwards(resp.message);
   setfee_earned(fee_earned)
  //  set_rebalance_cost(resp.message)
  }
  if(!generic_node_info)
    {
      fetchDataAsync();
    }
  
},[])

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [
          860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478, 2478, 3478,
        ],
        borderColor: "#FFBB38",
        fill: true,
        pointRadius: 1,
        backgroundColor: "#FFBB38",
        lineTension: 0.5,
      },
      {
        label: "Dataset 2",
        data: [
          1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000, 6000,
          6500,
        ],
        borderColor: "#8B98F9",
        fill: true,
        pointRadius: 1,
        backgroundColor: "#8B98F9",
        lineTension: 0.5,
      },
    ],
  };
  return (
    <div className="pb-97">
      <Header1 />
      <div className="data-details mission_control">
        <div>
          <h1>Mission Control - {generic_node_info?.alias}</h1>
        </div>
        <div className="container">
          <div>
            <h2>Channel Overview</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Alias</th>
                  <th>Capacity</th>
                  <th>Inbound</th>
                  <th>Ratio</th>
                  <th>Outbond</th>
                  <th>Total Received</th>
                  <th>Total Sent</th>
                  {/* <th>Fee Rate</th>
                  <th>Net Fees Earned</th> */}
                </tr>
              </thead>
              {channel_info_with_accounting?.map((item, index) => (
                <tr className="first_tr" key={index + 1}>
                  <td>{item?.peer_alias}</td>
                  <td>{Number(item?.capacity)?.toLocaleString()}</td>
                  <td className="gradient_text">{Number(item?.remote_balance)?.toLocaleString()}</td>
                  <td>---|----</td>
                  {/* <td>{(item?.remote_balance / (item?.local_balance+item?.remote_balance))*100}</td> */}
                  <td>{Number(item?.local_balance)?.toLocaleString()}</td>
                  <td>{Number(item?.total_satoshis_received)?.toLocaleString()}</td>
                  <td>{Number(item?.total_satoshis_sent)?.toLocaleString()}</td>
                  {/* <td>{item?.policies?.node1_policy?.fee_rate_milli_msat}</td>
                  <td>{(item?.outgoing_info?.total_fee_mtokens / 1000) ? Math.floor((item?.outgoing_info?.total_fee_mtokens / 1000)) : 0}</td> */}
                </tr>
              ))}
            </table>
          </div>
        </div>
        <div className="container1">
          <h2>Pending Items</h2>
          <div className="pending-item">
            <div className="img-box">
              <img
                className="mr-4"
                src={require("../assets/icons/coin.png")}
                alt=""
              />
              <p>
              {Number(wallet_balance_info?.unconfirmed_balance)?.toLocaleString()}  Sats
                <br /> Pending Deposit
              </p>
            </div>
            <div className="img-box">
              <img
                className="mr-4"
                src={require("../assets/icons/pending.png")}
                alt=""
              />
              <p>
                {`${generic_node_info?.num_pending_channels} Pending`} <br />
                Channels
              </p>
            </div>
          </div>
        </div>
        {channle_opening_fee_earned && (
        <div className="container2">
          <h2 className="mb-0">Analytics</h2>
          <div className="analytics">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="box box1">
                <table className="w-100">
                  <thead>
                    <tr>
                  <th>Revenue</th>
                  </tr>
                  </thead>
                  <tr>
                    <td>Forwarding Fee</td>
                    <td className="text-right">{(Math.floor(fee_earned?.fee_earned))?.toLocaleString()}</td>
                  </tr>
                  <thead>
                    <tr>
                  <th>Expenses</th> </tr></thead>
                  <tr>
                    <td>Rebalancing Cost</td>
                    <td className="text-right">{rebalance_cost?.total_fee_in_sats?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Open Channels</td>
                    <td className="text-right">{channle_opening_fee_earned?.channel_opening_cost?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Close Channels</td>
                    <td className="text-right">-</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className="text-right">{(rebalance_cost?.total_fee_in_sats +channle_opening_fee_earned?.channel_opening_cost).toLocaleString()}</td>
                  </tr>
                  <thead>
                    <tr>
                  <th>Profit</th></tr></thead>
                  <tr>
                    <td>Total</td>
                    <td className="text-right">{(Math.floor((fee_earned?.fee_earned)-(rebalance_cost?.total_fee_in_sats +channle_opening_fee_earned?.channel_opening_cost))).toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Gross Profit Margin</td>
                    <td className="text-right">-</td>
                  </tr>
                </table>
              </div>
              <div className="box2 graph">
                {/* <img src={require("../assets/icons/Graph.png")} alt="" /> */}
                <h3>Revenue & Expenses Graph</h3>
                <Line
                  data={{
                    labels: [
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
                      "Dec",
                    ],
                    datasets: [
                      {
                        label: "Dataset 1",
                        data: [
                          860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830,
                          2478, 2478, 2478,
                        ],
                        borderColor: "#FFBB38",
                        fill: true,
                        pointRadius: 1,
                        backgroundColor: "#FFBB38",
                        lineTension: 0.5,
                      },
                      {
                        label: "Dataset 2",
                        data: [
                          1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000,
                          7000, 6000, 5500,
                        ],
                        borderColor: "#8B98F9",
                        fill: true,
                        pointRadius: 1,
                        backgroundColor: "#8B98F9",
                        lineTension: 0.5,
                      },
                    ],
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
                <table className="w-100">
                <thead>
                    <tr>
                  <th>Summary</th></tr></thead>
                  <tr>
                    <td className="summary_top">Revenue</td>
                    <td className="text-right">{(Math.floor(fee_earned?.fee_earned))?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Amount Forwarded</td>
                    <td className="text-right">{fee_earned?.amount_forwarded?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Transaction</td>
                    <td className="text-right">{(Math.floor(fee_earned?.total_forwards))?.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <td>Average Fee</td>
                    <td className="text-right">{(Math.floor(fee_earned?.average_fee_earned))?.toLocaleString()}</td>
                  </tr>
                </table>
              </div>
              <div className="box box4">
                Balance: {Number(wallet_balance_info?.total_balance)?.toLocaleString()} sats <br />
                Deposit: - sats <br />
                Growth: - YTD
              </div>
            </div>
          </div>
        </div> )}
      </div>
    </div>
  );
};

export default MissionControlDev;
