import React, { useState } from "react";
import "./Accounting.css";
import Header1 from "../components/Header1";
import DepositModal from "../components/TransactComponents/DepositModal";
import OnChainPaymentModal from "../components/TransactComponents/OnChainPaymentModal";
import LightningPaymentModal from "../components/TransactComponents/LightningPaymentModal";
import { useSelector } from "react-redux";
import { call_grpc_ops } from "../services/api/lightning_node_communication_service";

const Accounting = () => {
  const user_id = useSelector((state) => state?.user_id);
  const selectec_node_id = useSelector((state) => state?.selected_node_id);

  const [wallet_balance_info, set_wallet_balance_info] = useState({});
  const [lightning_payment_modal, set_lightning_payment_modal] =
    useState(false);

  const [deposit_modal_state, set_deposit_modal_state] = useState(false);
  const [on_chain_payment_modal_state, set_on_chain_payment_modal_state] =
    useState(false);
  const [
    on_chain_deposit_payment_message,
    setOn_chain_deposit_payment_message,
  ] = useState("");
  const on_deposit_button_clicked = () => {
    set_deposit_modal_state(true);
  };

  const on_withdraw_button_clicked = () => {
    setOn_chain_deposit_payment_message("Make On-Chain Withdrawal");
    set_on_chain_payment_modal_state(true);
  };

  const on_on_chain_payment_button_clicked = () => {
    setOn_chain_deposit_payment_message("Make On-Chain Payment");
    set_on_chain_payment_modal_state(true);
  };

  const on_lightning_payment_button_clicked = () => {
    set_lightning_payment_modal(true);
  };

  React.useEffect(() => {
    const fetchDataAsync = async () => {
      let req_obj = {
        user_id: user_id,
        unique_node_id: selectec_node_id,
        operation: "wallet_balance_grpc",
      };
      let resp = await call_grpc_ops(req_obj);
      if (resp.success) {
       
        set_wallet_balance_info(resp.message);
      } else {
        set_wallet_balance_info({});
      }
    };
      fetchDataAsync();
  }, []);

  return (
    <>
      <div>
        <Header1 />
        <div class="account-div1">
          <div class="account-div">
            <div class="acc1 blnc-div">
          
              <p>
              Balance <br/>
              <br/>
                Confirmed: {Number(wallet_balance_info?.confirmed_balance)?.toLocaleString()} sats <br />
                UnConfirmed: {Number(wallet_balance_info?.unconfirmed_balance)?.toLocaleString()} sats <br />
                Total: {Number(wallet_balance_info?.total_balance)?.toLocaleString()} sats <br />
                {/* Growth: - */}
              </p>
            </div>
          </div>
          <div>
            <div class="account-div">
              <div
                class="acc deposit-div"
                onClick={() => on_deposit_button_clicked()}
              >
                <a class="pay">
                  <p>Deposit</p>
                  <img
                    src={require("../assets/icons/deposit.png")}
                    alt="deposit logo"
                  />
                </a>
              </div>
              <div
                class="acc withdraw-div"
                onClick={() => on_withdraw_button_clicked()}
              >
                <a class="pay">
                  <p>Withdrawal</p>
                  <img
                    src={require("../assets/icons/deposit.png")}
                    alt="withdraw logo"
                  />
                </a>
              </div>
            </div>
            <div class="account-div">
              <div
                class="acc onchain-div"
                onClick={() => on_on_chain_payment_button_clicked()}
              >
                <a class="pay">
                  <p>
                    On-Chain <br /> Payment
                  </p>
                  <img
                    src={require("../assets/icons/coin.png")}
                    alt="deposit logo"
                  />
                </a>
              </div>
              <div class="acc light-div">
                <a
                  class="pay"
                  onClick={() => on_lightning_payment_button_clicked()}
                >
                  <p>
                    Lightning <br /> Payment
                  </p>
                  <img
                    src={require("../assets/icons/lightning.png")}
                    alt="withdraw logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {deposit_modal_state && (
        <DepositModal
          set_deposit_modal_state={set_deposit_modal_state}
          deposit_modal_state={deposit_modal_state}
        />
      )}

      <OnChainPaymentModal
        header_message={on_chain_deposit_payment_message}
        set_on_chain_payment_modal_state={set_on_chain_payment_modal_state}
        on_chain_payment_modal_state={on_chain_payment_modal_state}
      />

      <LightningPaymentModal
        set_lightning_payment_modal={set_lightning_payment_modal}
        lightning_payment_modal={lightning_payment_modal}
      />
    </>
  );
};

export default Accounting;
