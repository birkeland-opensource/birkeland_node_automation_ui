import React, { useEffect, useState } from 'react'
import Header1 from '../components/Header1';
import './Policy.css'
import { useSelector } from 'react-redux';
import { get_policy_info, save_policy_info } from '../services/api/policy_management_service';


const Policy = () => {

    const user_id = useSelector((state) => state?.user_id);
    const selectec_node_id = useSelector((state) => state?.selected_node_id);

    const ACTION = {
        SET_MAXIMUM_CHANNEL_IMBALANCE_MEASURE: "SET_MAXIMUM_CHANNEL_IMBALANCE_MEASURE",
        SET_FREQUENCY_OF_REBALANCING: "SET_FREQUENCY_OF_REBALANCING",
        SET_PASSIVE_REBALANCING_FLAG: "SET_PASSIVE_REBALANCING_FLAG",
        SET_OPERATE_ON_CLEARNET_FLAG: "SET_OPERATE_ON_CLEARNET_FLAG",
        SET_OPERATE_ON_TOR_FLAG: "SET_OPERATE_ON_TOR_FLAG",
        SET_COLLECT_ANALYTICS_ON_PEERS_FLAG: "SET_COLLECT_ANALYTICS_ON_PEERS_FLAG",
        SET_SHARE_DATA_WITH_PEERS_FLAG: "SET_SHARE_DATA_WITH_PEERS_FLAG",
        SET_AUTO_CONNECT_NEW_PEERS_FLAG: "SET_AUTO_CONNECT_NEW_PEERS_FLAG",
        SET_ALL_VALUES: "SET_ALL_VALUES",
      };


      const reducer = (state, action) => {
        switch (action.type) {
          case ACTION.SET_MAXIMUM_CHANNEL_IMBALANCE_MEASURE:
            return { ...state, maximum_channel_imbalance_measure: action.payload };
          case ACTION.SET_FREQUENCY_OF_REBALANCING:
            return { ...state, frequency_of_rebalancing: action.payload };
          case ACTION.SET_PASSIVE_REBALANCING_FLAG:
            return { ...state, passive_rebalancing_flag: action.payload };
          case ACTION.SET_OPERATE_ON_CLEARNET_FLAG:
            return { ...state, operate_on_clearnet_flag: action.payload };
          case ACTION.SET_OPERATE_ON_TOR_FLAG:
            return { ...state, operate_on_tor_flag: action.payload };
          case ACTION.SET_COLLECT_ANALYTICS_ON_PEERS_FLAG:
            return { ...state, collect_analytics_on_peers_flag: action.payload };
          case ACTION.SET_SHARE_DATA_WITH_PEERS_FLAG:
            return { ...state, share_data_with_peers_flag: action.payload };
         case ACTION.SET_AUTO_CONNECT_NEW_PEERS_FLAG:
            return { ...state, auto_connect_new_peers_flag: action.payload };
         case ACTION.SET_ALL_VALUES:
                return {...state, ...action.payload };
          default:
            return state;
        }
      };

      React.useEffect(() => {
        const fetchDataAsync = async () => {
          let req_obj = {
            params  : {user_id: user_id,
                node_id: selectec_node_id,
          }}
          let resp = await get_policy_info(req_obj);
          console.log(resp?.message?.preferred_state);
          if(resp?.success){
            dispatch({
                type: ACTION.SET_ALL_VALUES,
                payload: resp?.message?.preferred_state,
              });
          }
          
        }
        fetchDataAsync();
        
      },[])


      const [state, dispatch] = React.useReducer(reducer, {
        maximum_channel_imbalance_measure: 90,
        frequency_of_rebalancing: 2,
        passive_rebalancing_flag: false,
        operate_on_clearnet_flag : false,
        operate_on_tor_flag: false,
        collect_analytics_on_peers_flag: false,
        share_data_with_peers_flag: false,
        auto_connect_new_peers_flag: false,
      });

      const on_save_changes_btn_clicked = async() =>{
        let data_to_save = {"preferred_state" :state, "user_id" : user_id,node_id:selectec_node_id }
        console.log(data_to_save);
       let resp = await save_policy_info(data_to_save);
       console.log(resp);
      }

      
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
                                            <input type="range" onChange={e => dispatch({type: ACTION.SET_MAXIMUM_CHANNEL_IMBALANCE_MEASURE,payload: e.target.value})} className="w-100 range-input" value={state?.maximum_channel_imbalance_measure} style={{ background: `linear-gradient(to right, #FEA321 0%, #FEA321 ${state?.maximum_channel_imbalance_measure}%, #221956 ${state?.maximum_channel_imbalance_measure}%, #221956 100%)` }} />
                                        </div>
                                        <div className="d-flex justify-content-between progress-content">
                                            <p id='rangeValue'>{state?.maximum_channel_imbalance_measure}%</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Frequency of active rebalning</td>
                                <td className="input-row">
                                    <div className="cybot d-flex card-content flex-column">
                                        <div className='w-100 position-relative custom-slide-input'>
                                            <input type="range" onChange={e =>  dispatch({type: ACTION.SET_FREQUENCY_OF_REBALANCING,payload: e.target.value})} className="w-100 range-input1" value={state?.frequency_of_rebalancing} style={{ background: `linear-gradient(to right, #FEA321 0%, #FEA321 ${state?.frequency_of_rebalancing}%, #221956 ${state?.frequency_of_rebalancing}%, #221956 100%)` }} />
                                        </div>
                                        <div className="d-flex justify-content-between progress-content">
                                            <p>Every {Math.round(state?.frequency_of_rebalancing/10)} hours</p>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="detail-row">Passive rebalancing</td>
                                <td className="input-row">
                                    <span className="toggle-container">
                                        <label className="toggleswitch">
                                            <input type="checkbox" checked={state?.passive_rebalancing_flag} onChange={e =>  dispatch({type: ACTION.SET_PASSIVE_REBALANCING_FLAG,payload: e.target.checked})}/>
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
                                            <input type="checkbox" checked={state?.operate_on_clearnet_flag} onChange={e =>  dispatch({type: ACTION.SET_OPERATE_ON_CLEARNET_FLAG,payload: e.target.checked})} />
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
                                            <input type="checkbox" checked={state?.operate_on_tor_flag} onChange={e =>  dispatch({type: ACTION.SET_OPERATE_ON_TOR_FLAG,payload: e.target.checked})}/>
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
                                            <input type="checkbox" checked={state?.collect_analytics_on_peers_flag} onChange={e =>  dispatch({type: ACTION.SET_COLLECT_ANALYTICS_ON_PEERS_FLAG,payload: e.target.checked})}/>
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
                                            <input type="checkbox" checked={state?.share_data_with_peers_flag} onChange={e =>  dispatch({type: ACTION.SET_SHARE_DATA_WITH_PEERS_FLAG,payload: e.target.checked})}/>
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
                                            <input type="checkbox" checked={state?.auto_connect_new_peers_flag} onChange={e =>  dispatch({type: ACTION.SET_AUTO_CONNECT_NEW_PEERS_FLAG,payload: e.target.checked})}/>
                                            <span className="toggle-slider"></span>
                                        </label>
                                    </span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <button className="save-change-btn" onClick={() =>on_save_changes_btn_clicked()}>Save Changes</button>
                </div>
            </div>
        </div>
    )
}

export default Policy