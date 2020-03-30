import React from "react";
import "./Manage.css";
import { NavLink, Route, Redirect } from "react-router-dom";
// import 'rsuite/dist/styles/rsuite-dark.css'
import { Button } from "semantic-ui-react";

// import { Toggle, Button } from 'rsuite';

export default props => {
  const {
    staker,
    worker,
    stakerBalEth,
    stakersNuAll,
    stakerNuBal,
    stakerNuLocked,
    stakerNuUnlocked,
    workerEthBal,
    status,
    windDown,
    reStakeDisabled,
    subStakesLength,
    substakeList
  } = props.manageData;
  
  const { setRestake, setWinddown, setWorker } = props.setters;


  
  console.log('winddown',windDown);
  console.log('restake disabled?', reStakeDisabled);
  console.log('consnt stakersNuAll = ', stakersNuAll);
  console.log(typeof subStakesLength);
  console.log('substakeList = ', substakeList);


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
            <span>Ether Balance:</span>
            <span>
              <b>{stakerBalEth}</b> ETH
            </span>
          </p>

          <p>
            <span>Balance:</span>
            <span>
              <b>{stakerNuBal.toLocaleString("en-Us")}</b> NU
            </span>
          </p>
          <p>
            <span>Locked in stake:</span>
            <span>
              <b>{stakerNuLocked.toLocaleString("en-Us")}</b> NU
            </span>
          </p>
          <p>
            <span>Unlocked <i>(Available to withdraw):</i></span>
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
                className={!reStakeDisabled ? "restake_active" : null}
                onClick={() => setRestake(true)}>
                On
              </button>
              <button
                className={reStakeDisabled ? "restake_active" : null}
                onClick={() => setRestake(false)}>
                Off
              </button>
            </div>
          </div>
          <div className="winddown">
            <h4 className="winddown_text">Wind-Down</h4>

            <div className="btn-group">
              <button
                className={windDown ? "restake_active" : null}
                onClick={() => setWinddown(true)}>
                On
              </button>
              <button
                className={!windDown ? "restake_active" : null}
                onClick={() => setWinddown(false)}>
                Off
              </button>
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
            Ether Balance: <span><b>{workerEthBal}</b> ETH</span>
          </p>
        </div>

        <div>
          {/* <div className="btn-group">
            <p>Detach Worker</p>
            <button>Detach</button>
          </div> */}
          <ChangeWorkerField setWorker={setWorker} />
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



        <Route path="/manage" exact>
          <Redirect to="/manage/substake-list" />
        </Route>
        <Route path="/manage/substake-list" render={() => 
          <SubstakeList substakeList={substakeList} />
        } />
        <Route path="/manage/action-history" component={ActionHistory} />
      </div>
    </div>
  );
};



const SubstakeList = (props) => {
  // const {substakeList} = props.substakeList;
  console.log(props.substakeList)

  let substake_item;

  if(props.substakeList !== null){
    substake_item = props.substakeList.map((obj) => {
      const value = (obj.lockedValue / 10**18).toLocaleString("en-Us")
      const startDay = new Date(obj.firstPeriod*86400000).toUTCString().slice(0, 11);
      const startYear = new Date(obj.firstPeriod*86400000).toDateString().slice(-4);
      const endDay = new Date((+obj.firstPeriod + +obj.periods)*86400000).toUTCString().slice(0, 11);
      const endYear = new Date((+obj.firstPeriod + +obj.periods)*86400000).toDateString().slice(-4);

      console.log('obj.firstPeriod', typeof obj.firstPeriod)
      console.log('obj.periods', typeof obj.periods)

      return (
        <div key={obj.id} className="substake_and_prdvd">
          <div className="substake_item">
            <div>
              <span>№ {obj.id}</span>
              <span>STAKE</span>
            </div>
            <div>
              <span>{value}</span>
              <span>NU</span>
            </div>
            <div>
              <span>{obj.periods}</span>
              <span>DAYS</span>
            </div>
            <div>
              <span>{startDay}</span>
              <span>{startYear}</span>
            </div>
            <div>
              <span>{endDay}</span>
              <span>{endYear}</span>
            </div>
            
          </div>
          <div className="prolong_devide">
            <button>Prolong</button>
            <button>Devide</button>
          </div>
        </div>
      )
    })
  } else {
    return substake_item = <div>no stakes</div>
  }


  return (
    <div>
      <div className="substake_items_titles">
        <div>
          <span>Substake</span>
          <span>Amount</span>
          <span>Duration</span>
          <span>Created</span>
          <span>Ends</span>
        </div>
        <span>Modify</span>
      </div>
      <div className="list_items">

        {substake_item}

      </div>
    </div>
  );
};

const ActionHistory = () => {
  return <div>Action History</div>;
};



class ChangeWorkerField extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({address: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setWorker(this.state.address)
  }

  render() {
    console.log(this.state.address)
    return (
      <div>

        <p>Set New Worker</p>
        
        <form onSubmit={this.handleSubmit} className="worker_buttons">

          <button className="change_wrkr_button">Change Worker</button>
          <input 
            placeholder="Enter new ETH address" 
            className="change_wrkr_input" 
            type="text"
            value={this.state.address}
            onChange={this.handleChange}
            />
            
        </form>

      </div>
    )
  }
}