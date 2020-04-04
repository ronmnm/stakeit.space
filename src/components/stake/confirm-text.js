import React from "react";
import s from "./confirm-text.module.css";

const ConfirmationText = props => {
   return (
      <div className={s.container_scrollable}>
         <div className={s.scrollable}>
            <p>
               Staking address: <b>{props.account}</b>
            </p>
            <span>
               ~ Value -> <b>{props.amount}</b> NU (15000000000000000000000 NuNits)
            </span>
            <span>
               ~ Duration -> <b>{props.duration}</b> Days (<b>{props.duration}</b> Periods)
            </span>
            <p>* Ursula Node Operator Notice *</p>
            <p>
               By agreeing to stake <b>{props.amount}</b> NU (<b>{props.amount * 10**18}</b> NuNits):
            </p>
            <p>- Staked tokens will be locked for the stake duration.</p>
            <p>
               - You are obligated to maintain a networked and available
               Ursula-Worker node bonded to the staker address
               0x99997edFDA5580d32F470cb9db82898169EeeDaa for the duration of
               the stake(s) (30 periods).
            </p>
            <p>
               - Agree to allow NuCypher network users to carry out
               uninterrupted re-encryption work orders at-will without
               interference. Failure to keep your node online, or violation of
               re-encryption work orders will result in the loss of staked
               tokens as described in the NuCypher slashing protocol. Keeping
               your Ursula node online during the staking period and
               successfully producing correct re-encryption work orders will
               result in rewards paid out in ethers retro-actively and
               on-demand.
            </p>
         </div>
      </div>
   );
};
export default ConfirmationText;
