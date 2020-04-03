import React from "react";
import s from "./staker.module.css";

const Staker = props => {
   const {
      staker,
      stakerBalEth,
      stakerNuBal,
      stakerNuLocked,
      stakerNuUnlocked,
      status,
      windDown,
      reStakeDisabled
   } = props.manageData;
   const { setRestake, setWinddown } = props;

   return (
      <div className={s.staker_manage}>
         <h4 className={s.address_title}>Staker Account</h4>
         <h2 className={s.address_eth}>
            {staker.slice(0, 6)}...{staker.slice(38, 42)}
         </h2>

         <div className={s.staker_content}>
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
               <span>
                  Unlocked <i>(Available to withdraw):</i>
               </span>
               <span>
                  <b>{stakerNuUnlocked.toLocaleString("en-Us")}</b> NU
               </span>
            </p>
         </div>
         
         <div className={s.staker_buttons}>
            <div>
               <h4 className={s.restake_text}>
                  Re-Stake<span className={s.restake_status}>{status}</span>
               </h4>

               <div className={s.btn_group}>
                  <button
                     className={!reStakeDisabled ? s.button_active : null}
                     onClick={() => setRestake(true)}>
                     On
                  </button>
                  <button
                     className={reStakeDisabled ? s.button_active : null}
                     onClick={() => setRestake(false)}>
                     Off
                  </button>
               </div>
            </div>
            <div className={s.winddown}>
               <h4 className={s.winddown_text}>Wind-Down</h4>

               <div className={s.btn_group}>
                  <button
                     className={windDown ? s.button_active : null}
                     onClick={() => setWinddown(true)}>
                     On
                  </button>
                  <button
                     className={!windDown ? s.button_active : null}
                     onClick={() => setWinddown(false)}>
                     Off
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Staker;
