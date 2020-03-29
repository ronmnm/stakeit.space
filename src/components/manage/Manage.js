import React from "react";
import "./Manage.css";
import { NavLink, Route } from "react-router-dom";
// import 'rsuite/dist/styles/rsuite-dark.css'
import { Button } from "semantic-ui-react";

// import { Toggle, Button } from 'rsuite';

export default props => {
  const {
    staker,
    worker,
    stakerBalEth,
    stakerNuBal,
    stakerNuLocked,
    stakerNuUnlocked,
    workerEthBal,
    status,
    windDown,
    reStakeDisabled,
    RestakeOn
  } = props.manageData;

  const {
    setRestake,
    setWinddown
  } = props.setters;

  // const setWinddownClick = async e => {
  //   e.preventDefault();
  //   props.setWinddown();
  // };
  // props.setWinddown();
  let restakeStatus = "blabla";
  console.log(windDown);
  return (
    <div className="my_manage">
      {/* Staker Left Side */}
      <div className="staker_manage big_item">
        <h4 className="address_title">Staker Account</h4>
        <h2 className="address_eth">
          {staker.slice(0, 6)}...{staker.slice(38, 42)}
        </h2>

        <div className="staker_content">
          <p>
            Ether Balance:{" "}
            <span>
              <b>{stakerBalEth}</b> ETH
            </span>
          </p>

          <p>
            Balance:{" "}
            <span>
              <b>{stakerNuBal.toLocaleString("en-Us")}</b> NU
            </span>
          </p>
          <p>
            Locked in stake:{" "}
            <span>
              <b>{stakerNuLocked.toLocaleString("en-Us")}</b> NU
            </span>
          </p>
          <p>
            Unlocked:{" "}
            <span>
              <b>{stakerNuUnlocked.toLocaleString("en-Us")}</b> NU
            </span>
          </p>
        </div>
        <div className="staker_buttons">
          <div className="restake">
            <h4 className="restake_text">
              Re-Stake<span className="restake_status">{status}</span>
            </h4>


            {/* <Button.Group size="tiny">
              <Button disabled onClick={() => props.setters.RestakeOn(true)}>On</Button>
              <Button onClick={() => props.setters.RestakeOn(false)}>Off</Button>
            </Button.Group> */}


            <div className="btn-group">
              <button 
                className={!reStakeDisabled ? 'restake_active' : null}
                onClick={() => setRestake(true)}>On</button>
              <button 
                className={reStakeDisabled ? 'restake_active' : null}
                onClick={() => setRestake(false)}>Off</button>           
            </div>


          </div>
          <div className="winddown">
            <h4 className="winddown_text">Wind-Down</h4>

            <div className="btn-group">
              <button 
                className={windDown ? 'restake_active' : null}
                onClick={() => setWinddown(true)}>On</button>
              <button 
                className={!windDown ? 'restake_active' : null}
                onClick={() => setWinddown(false)}>Off</button>           
            </div>


          </div>
        </div>
      </div>

      {/* Worker Rigth Side */}
      <div className="worker_manage big_item">
        <h4 className="address_title">Worker Account</h4>
        <h2 className="address_eth">
          {worker.slice(0, 6)}...{worker.slice(38, 42)}
        </h2>

        <div className="worker_content">
          <p>
            Balance: <span>{workerEthBal} ETH</span>
          </p>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="substake_list">
        <div className="nav_manage_bottom">
          <NavLink className="my_nav_item" to="/manage/substake-list">
            Substake List
          </NavLink>
          <NavLink className="my_nav_item" to="/manage/action-history">
            Action History
          </NavLink>
        </div>

        <Route path="/manage" exact component={SubstakeList} />
        <Route path="/manage/substake-list" component={SubstakeList} />
        <Route path="/manage/action-history" component={ActionHistory} />
      </div>
    </div>
  );
};

const SubstakeList = () => {
  return (
    <div>
      <div className="substake_items_titles">
        <span>Substake</span>
        <span>Amount</span>
        <span>Duration</span>
        <span>Created</span>
        <span>Ends</span>
        <span>Modify</span>
      </div>
      <div className="list_items">
        <div className="substake_item">
          <div>
            <span>№0</span>
            <span>STAKE</span>
          </div>
          <div>
            <span>956,000.55</span>
            <span>NU</span>
          </div>
          <div>
            <span>365</span>
            <span>DAYS</span>
          </div>
          <div>
            <span>21 FEB</span>
            <span>2020</span>
          </div>
          <div>
            <span>21 FEB</span>
            <span>2021</span>
          </div>
          <div>
            <span>№0</span>
            <span>STAKE</span>
          </div>
        </div>
        <div className="substake_item">
          <div>Stake</div>
          <div>Stake</div>
          <div>Stake</div>
          <div>Stake</div>
          <div>Stake</div>
          <div>Stake</div>
        </div>
      </div>
    </div>
  );
};

const ActionHistory = () => {
  return <div>Action History</div>;
};
