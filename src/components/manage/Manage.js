import React from "react";
import "./Manage.css";
import { NavLink, Route, Redirect } from "react-router-dom";

import Staker from "./staker/staker";
import Worker from "./worker/worker";
import Substakes from "./substakes/substakes";
import NoStakes from "./no-stakes/no-stakes";

// import { Toggle, Button } from 'rsuite';

export default props => {
   const {
      worker,
      workerEthBal,
      substakeList
   } = props.manageData;

   const { setRestake, setWinddown, setWorker } = props.setters;

   let workerAddress;
   if (worker === "0x0000000000000000000000000000000000000000") {
      workerAddress = <React.Fragment>No worker assigned</React.Fragment>;
   } else {
      workerAddress = `${worker.slice(0, 6)}...${worker.slice(38, 42)}`;
   }

   return (
      <div className="my_manage">
         {/* Staker Left Side */}
         <Staker setRestake={setRestake} setWinddown={setWinddown} manageData={props.manageData} />

         {/* Worker Rigth Side */}
         <div className="worker_manage big_item">
            <h4 className="address_title">Worker Account</h4>
            <h2 className="address_eth">{workerAddress}</h2>

            <div className="worker_content">
               <p>
                  Ether Balance:{" "}
                  <span>
                     <b>{workerEthBal}</b> ETH
                  </span>
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
            <Route
               path="/manage/substake-list"
               render={() => <SubstakeList substakeList={substakeList} />}
            />
            <Route path="/manage/action-history" component={ActionHistory} />
         </div>
      </div>
   );
};

const SubstakeList = props => {
   // const {substakeList} = props.substakeList;
   // console.log(props.substakeList)

   let substake_item;

   if (props.substakeList !== null) {
      substake_item = props.substakeList.map(obj => {
         const value = (obj.lockedValue / 10 ** 18).toLocaleString("en-Us");
         const startDay = new Date(obj.firstPeriod * 86400000)
            .toUTCString()
            .slice(0, 11);
         const startYear = new Date(obj.firstPeriod * 86400000)
            .toDateString()
            .slice(-4);
         const currentDate = Date.now() / 86400000;
         const endDay = new Date((currentDate + +obj.periods + 1) * 86400000)
            .toUTCString()
            .slice(0, 11);
         const endYear = new Date((currentDate + +obj.periods) * 86400000)
            .toDateString()
            .slice(-4);

         // console.log('obj.firstPeriod', typeof obj.firstPeriod)
         // console.log('obj.periods', typeof obj.periods)

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
         );
      });
   } else {
      return (substake_item = <NoStakes />);
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
         <div className="list_items">{substake_item}</div>
      </div>
   );
};

const ActionHistory = () => {
   return <div>Coming soon...</div>;
};


class ChangeWorkerField extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         address: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ address: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      this.props.setWorker(this.state.address);
   }

   render() {
      return (
         <div>
            <p>Set New Worker</p>

            <form onSubmit={this.handleSubmit} className="worker_buttons">
               <button className="change_wrkr_button">Confirm</button>
               <input
                  placeholder="Enter new ETH address"
                  className="change_wrkr_input"
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange}
               />
            </form>
         </div>
      );
   }
}
