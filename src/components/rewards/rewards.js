import React, { useState, useEffect } from "react";
import s from "./rewards.module.css";

import ReactGA from "react-ga";
import Modal from "react-modal";
import RewardsService from "../../services/rewards-service";

const rewardsService = new RewardsService();

Modal.setAppElement("#root");

export default props => {
   ReactGA.pageview(window.location.pathname + window.location.search);


   useEffect(() => {
      rewardsService.getRewardsData()
         .then((res) => console.log(res));
   }, []);



   return (
      <div className={s.rewards_wrapper}>


         <div className={s.withdraw_field_wrapper}>
            <div className={`${s.withdraw_item} ${s.policy}`}>
               <span>policy fee</span>
               <span>feee</span>
               <span>Wei</span>
               <span className={s.button}>
                  withdraw
               </span>
            </div>
            <div className={`${s.withdraw_item} ${s.nu}`}>
               <span>nu tokens</span>
               <span>0000</span>
               <span>NU</span>

               <div className={s.withdraw_inp_btn}>
                  {/* <b>Amount:</b>
                  <input className={s.input} autoComplete='off' placeholder='0.0' type="text"/> */}
                  <div className={s.button}>
                     withdraw
                  </div>
               </div>
            </div>
            <div className={`${s.withdraw_item} ${s.worklock}`}>
               <span>refund from worklock</span>
               <span>000</span>
               <span>ETH</span>
               <span className={s.button}>
                  REFUND
               </span>
            </div>
         </div>
         <div className={s.withdraw_history}>
            {/* <h3>Withdraw history</h3> */}
         </div>
      </div>
   );
};
