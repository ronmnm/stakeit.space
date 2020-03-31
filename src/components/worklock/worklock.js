import React from "react";
import s from "./worklock.module.css";

// import {
//   Button,
//   FormGroup,
//   ButtonToolbar,
//   Form,
//   ControlLabel,
//   FormControl
// } from "rsuite";
// import "rsuite/dist/styles/rsuite-dark.css";




const WorkLock = props => {

  const {
    account,
    biddingStartDate,
    biddingEndDate,
    biddingTimeRemaining,
    cancellationTimeRemaining,
    //
    minAllowedBid,
    biddersLength,
    getContractBal,
    bonusETHSupply,
    boostingRefund,
    SLOWING_REFUND,
    bonusRefundRate,
    bonusDepositRate,
  } = props.worklockData;

  console.log(props.worklockData);

  return (
    <div className={s.worklock_wrapper}>
      <div className={s.worklock_timeline}>
        <h3>TIMELINE</h3>
        <div className={s.timeline_container}>
          <div>
            <span>Bidding Start Date</span>
            <h4>{biddingStartDate}</h4>
          </div>
          <div>
            <span>Bidding End Date</span>
            <h4>{biddingEndDate}</h4>
          </div>
          <div>
            <span>Bidding Ends In</span>
            <h4>{biddingTimeRemaining}</h4>
          </div>
          <div>
            <span>Bid Cancel Time Remaining</span>
            <h4>{cancellationTimeRemaining}</h4>
          </div>
        </div>
      </div>

      <div className={s.economics}>
        <h3>ECONOMICS</h3>
        <div className={s.economics_container}>
          <div className={s.economics_top_row}>
            <div>
              <span>Minimal allowed bid</span>
              <h4>{minAllowedBid} ETH</h4>
            </div>
            <div>
              <span>ETH Pool</span>
              <h4>{getContractBal} ETH</h4>
            </div>
            <div>
              <span>ETH Supply</span>
              <h4>{getContractBal}</h4>
            </div>
            <div>
              <span>Bonus ETH Supply</span>
              <h4>{bonusETHSupply} ETH</h4>
            </div>
          </div>
          <div className={s.economics_middle_row}>
            <div>
              <span>Number of bidders</span>
              <h4>{biddersLength}</h4>
            </div>
            <div>
              <span>Lot Size</span>
              <h4>???</h4>
            </div>
            <div>
              <span>Bonus Lot Size</span>
              <h4>???</h4>
            </div>
            <div>
              <span></span>
              <h4></h4>
            </div>
          </div>

          <div className={s.economics_bottom_row}>
            <div>
              <span>Boosting Refund</span>
              <h4>{boostingRefund}</h4>
            </div>
            <div>
              <span>Slowing Refund</span>
              <h4>{SLOWING_REFUND}</h4>
            </div>
            <div>
              <span>Bonus Refund Rate</span>
              <h4>{bonusRefundRate}</h4>
            </div>
            <div>
              <span>Bonus Deposit Rate</span>
              <h4>{bonusDepositRate}</h4>
            </div>
          </div>
        </div>
      </div>

      <div className={s.worklock_participant}>
        <h3>Worklock participant: {account}</h3>
      </div>
    </div>
  );
  
};

export default WorkLock;
