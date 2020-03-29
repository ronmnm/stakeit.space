import React from "react";
import "./Manage.css";

export default props => {
  const {
    staker,
    worker,
    stakerBalEth,
    stakerNuBal,
    stakerNuLocked,
    stakerNuUnlocked,
    workerEthBal,
    isReStakeLocked,
    windDown,
    reStakeDisabled
  } = props.manageData;

  const setWinddownClick = async (e) => {
    e.preventDefault();
    props.setWinddown()
  } 
  props.setWinddown()
  return (
    <div className="my_manage">
      <div className="staker_manage big_item">
        <h5 className="address_title">Staker Account</h5>
        <h4 className="address_eth">
          {staker.slice(0, 6)}...{staker.slice(38, 42)}
        </h4>

        <div className="staker_content">
          <p>
            Balance: <span>{stakerNuBal} NU</span>
          </p>
          <p>
            Locked in stake: <span>{stakerNuLocked} NU</span>
          </p>
          <p>
            Unlocked: <span>{stakerNuUnlocked} NU</span>
          </p>
        </div>
        <div className="staker_buttons">
          <div className="restake">
            <h5 className="restake_text">Re-Stake</h5>
            <button onClick={setWinddownClick}>True</button>
            <button>False</button>
          </div>
          <div className="winddown">
            <h5 className="winddown_text">Wind-Down</h5>
          </div>
        </div>
      </div>
      <div></div>
      <div className="worker_manage big_item">
        <h5 className="address_title">Worker Account</h5>
        <h4 className="address_eth">
          {worker.slice(0, 6)}...{worker.slice(38, 42)}
        </h4>

        <div className="worker_content">
          <p>
            Balance: <span>{workerEthBal} ETH</span>
          </p>
        </div>
      </div>
      <div className="substake_list">
        <div className="nav_manage_bottom">
          <span>Substake list</span>
          <span>Action History</span>
          <div className="list_item">
            <div>Stake</div>
            <div>Stake</div>
            <div>Stake</div>
            <div>Stake</div>
            <div>Stake</div>
          </div>
        </div>
      </div>
    </div>
  );
};
