import React from "react";
// import ReactGA from "react-ga";

import "./Manage.css";

import Staker from "./staker/staker";
import Worker from "./worker/worker";

import ManageBottom from "./manage-bottom/manage-bottom";

// import { Toggle, Button } from 'rsuite';

export default props => {


   const { worker, workerEthBal, substakeList } = props.manageData;
   const { setRestake, setWinddown, setWorker, prolongStake, divideStake } = props.setters;



   return (
      <div className="my_manage">
         {/* Staker Left Side */}
         <Staker
            setRestake={setRestake}
            setWinddown={setWinddown}
            manageData={props.manageData}
         />

         {/* Worker Rigth Side */}
         <Worker
            worker={worker}
            workerEthBal={workerEthBal}
            setWorker={setWorker}
            confirmedPeriod1={props.manageData.confirmedPeriod1}
         />

         {/* Bottom Nav */}
         <ManageBottom substakeList={substakeList} prolongStake={prolongStake} divideStake={divideStake} />
      </div>
   );
};



