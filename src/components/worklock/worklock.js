import React from "react";
import s from "./worklock.module.css";
import Blockies from "react-blockies";
import { Button, Form, Message } from "semantic-ui-react";

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
    currentBid,
    CancelationTime,
    claimTokens,
    tokensAllocated,
    claimingBool,
    completedWork,
    аvailableRefund,
    getRemainingWork,
    tokenSupply,
    bonusTokenSupply
  } = props.worklockData;
  const slicedAddr = `${account.slice(0, 6)}...${account.slice(-4)}`;
  // console.log(props.worklockData);

  let disableCanBtn;
  if (+currentBid > 0 && CancelationTime > 0) {
    disableCanBtn = null;
  } else {
    disableCanBtn = s.cancel_bid_dis;
  }

  let disableClaimBtn; 
  if (claimingBool){
    disableClaimBtn = null
  } else {  disableClaimBtn = s.cancel_bid_dis; }

  // console.log('claim ava', claimingBool);
  // console.log(disableCanBtn);
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
            <h4>Ended</h4>
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
              <h4>{tokenSupply} NU</h4>
            </div>
            <div>
              <span>Bonus Lot Size</span>
              <h4>{bonusTokenSupply} NU</h4>
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
        <h3>Worklock</h3>
        <div className={s.participant_field}>
          <div className={s.participanting_with_address}>
            <span className={s.part_with_addr}>
              Participating with address:
            </span>
            <span className={s.addr}>{slicedAddr}</span>
            <span className={s.current_bid}>Current Bid: </span>
            <span className={s.white_bold}>{currentBid} ETH</span>
            <button
              
              className={`${s.cancel_bid} ${disableCanBtn}`}>
              Cancel bid
            </button>

            <span className={s.current_bid}>Tokens Allocated: </span>
            <span className={s.white_bold}>{tokensAllocated} NU</span>
            <button
              onClick={() => {claimTokens()}}
              className={`${s.cancel_bid} ${disableClaimBtn}`}>
              Claim Tokens
            </button>
          </div>

          <div>
            <Bid />
          </div>
          <div className={s.participant_info}>
            <h5>Participant Info:</h5>
            <div><span>Completed Work:</span><b>{completedWork}</b></div>
            <div><span>Available Refund:</span><b>{аvailableRefund}</b></div>
            <div><span>Refunded Work:</span><b>0</b></div>
            <div><span>Remaining Work:</span><b>{getRemainingWork}</b></div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkLock;





class Bid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e){
    e.preventDefault();

  }

  render() {
    // console.log(this.state.value)
    return (
      <form className={s.bid_form} onSubmit={this.handleSubmit} >
        <span>Enter bid amount:</span>
        <input
          value={this.state.value}
          onChange={this.onChange}
          placeholder="ETH Amount"
          type="text"
        />
        <button 

          className={s.button_disabled}>Place Bid!</button>
      </form>
    );
  }
}
