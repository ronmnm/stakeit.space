import React, { useState, useRef } from "react";
import ReactGA from "react-ga";
import s from "./worklock.module.css";
import RoundSpinner from '../loader/7.svg';
import Modal from './modal/modal'

const WorkLock = props => {
   
   const [refundSpin, setRefundSpin] = useState(false);
   const [claimSpin, setClaimSpin] = useState(false);
   const [cancelSpin, setCancelSpin] = useState(false);
   const {
      account,
      biddingStartDate,
      biddingEndDate,

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
      bonusTokenSupply,
      claimed,
      refundedWork,
      refund,
      cancelBid
   } = props.worklockData;

   const slicedAddr = `${account.slice(0, 6)}...${account.slice(-4)}`;
   // console.log(props.worklockData);

   let disableCanBtn;
   if (+currentBid > 0 && CancelationTime > 0) {
      disableCanBtn = false;
   } else {
      disableCanBtn = true;
   }

   let disableClaimBtn;
   if (claimingBool && !claimed && tokensAllocated > 0) {
      disableClaimBtn = false;
   } else {
      disableClaimBtn = true;
   }


   let isClaimed;
   if (claimed) {
      isClaimed = "Yes";
   } else {
      isClaimed = "No";
   }

   let refund_disable;
   if (аvailableRefund > 0) {
      refund_disable = false;
   } else refund_disable = true;


   

   const onRefundClick = async (e) => {
      e.preventDefault();
      ReactGA.event({
         category: 'Worklock tab',
         action: 'Click Refund ETH button',
         label: 'worklock_tab_label'
      })
      setRefundSpin(true)
      refund()
         .then(() => { setRefundSpin(false) })
         .catch(() => { setRefundSpin(false) });
   }

   const onClaimClick = (e) => {
      e.preventDefault();
      ReactGA.event({
         category: 'Worklock tab',
         action: 'Click Claim NU button',
         label: 'worklock_tab_label'
      })
      setClaimSpin(true)
      claimTokens()
         .then(() => { setClaimSpin(false) })
         .catch(() => { setClaimSpin(false) });
   }


   const onCancelBidClick = (e) => {
      e.preventDefault();
      ReactGA.event({
         category: 'Worklock tab',
         action: 'Click Cancel Bid button',
         label: 'worklock_tab_label'
      })
      setCancelSpin(true)
      cancelBid()
         .then(() => { setCancelSpin(false) })
         .catch(() => { setCancelSpin(false) });
   }

   const modalRef = useRef();

   const openModal = (e) => {
      e.preventDefault();
      ReactGA.event({
         category: 'Worklock tab',
         action: 'Open Bid Modal',
         label: 'worklock_tab_label'
      })
      modalRef.current.openMod();

   }
   const closeModal = () => {

      modalRef.current.closeMod();
   }

   console.log(props.worklockData);
   return (
      <div className={s.worklock_wrapper}>
         <Modal ref={modalRef}>
            <h2 className={s.modal_title}>Place new bid</h2>

            <input placeholder='Enter ETH amount' className={s.bid_input} type="text"/>
            <span className={s.modal_bidding_closed}>Bidding period ended.</span>
            <div className={s.modal_buttons_group}>
               <span onClick={closeModal}>Close</span>
               <span>Confirm</span>
            </div>
         </Modal>
         <div className={s.worklock_participant}>
            <div className={s.participant_address}>
               <span>
                  Participating with address:
                  <br />
                  <b>{account}</b>
               </span>
               <div onClick={openModal}>Place new bid</div>
            </div>
            <div className={s.participant_panels}>
               <ParticipantPanel
                  title="Your current bid:"
                  value={currentBid}
                  currency="ETH"
                  button={cancelSpin ? <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" /> : 'Cancel Bid'}
                  
                  disabled={disableCanBtn}
                  onClick={onCancelBidClick}
               />
               <ParticipantPanel
                  title="Nu tokens allocation:"
                  value={tokensAllocated
                           .toLocaleString("en-Us")}
                  currency="NU"
                  button={claimSpin ? <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" /> : 'Claim'}
                  // disableClaimBtn
                  disabled={disableClaimBtn}
                  onClick={onClaimClick}
               />
               <ParticipantPanel
                  title="Available ETH refund:"
                  value={аvailableRefund}
                  currency="ETH"
                  button={refundSpin ? <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" /> : 'Refund'}
                  disabled={refund_disable}
                  onClick={onRefundClick}
               />
            </div>
         </div>

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
                  <h4>0</h4>
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
                     <span>Tokens Claimed</span>
                     <h4 style={{ color: "#0077FF" }}>{isClaimed}</h4>
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

         {/* <div className={s.worklock_participant}>
           
               <h3>Worklock </h3>
               
            
            <div className={s.participant_field}>
               <div className={s.participant_actions}>
                  <div className={s.participant_actions_item}>
                     <h5>Your current bid</h5>
                     <span>4 eth</span>
                     <span className={s.participant_actions_item_button}>
                        button
                     </span>
                  </div>
                  <div>Claim tokens</div>
                  <div>Refund eth</div> */}
         {/* <span className={s.part_with_addr}>
                     Participating with address:
                  </span>
                  <span className={s.addr}>{slicedAddr}</span>
                  <span className={s.current_bid}>Current Bid: </span>
                  <span className={s.white_bold}>{currentBid} ETH</span>
                  <button className={`${s.cancel_bid} ${disableCanBtn}`}>
                     Cancel bid
                  </button>

                  <span className={s.current_bid}>Tokens Allocated: </span>
                  <span className={s.white_bold}>{tokensAllocated} NU</span>
                  <button
                     onClick={() => {
                        claimTokens();
                     }}
                     className={`${s.cancel_bid} ${disableClaimBtn}`}>
                     Claim Tokens
                  </button> */}
         {/* </div>

               <div>
                  <Bid />
               </div>
               <div className={s.participant_info}>
                  <h5>Participant Info:</h5>
                  <div>
                     <span>Completed Work:</span>
                     <b>{completedWork}</b>
                  </div>
                  <div> */}
         {/* <span>Available Refund:</span>
                     <b>{parseFloat(аvailableRefund).toFixed(4)} ETH</b>
                     <span
                        className={`${s.refund_button} ${refund_disable}`}
                        onClick={() => {
                           refund();
                        }}>
                        Refund
                     </span>
                  </div> */}

         {/* <div>
                     <span>Refunded Work:</span>
                     <b>{refundedWork}</b>
                  </div>
                  <div>
                     <span>Remaining Work:</span>
                     <b>{getRemainingWork}</b>
                  </div>
               </div>
            </div>
         </div> */}
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
   handleSubmit(e) {
      e.preventDefault();
   }

   render() {
      // console.log(this.state.value)
      return (
         <form className={s.bid_form} onSubmit={this.handleSubmit}>
            <span>Enter bid amount:</span>
            <input
               value={this.state.value}
               onChange={this.onChange}
               placeholder="ETH Amount"
               type="text"
            />
            <button className={s.button_disabled}>Place Bid!</button>
         </form>
      );
   }
}

const ParticipantPanel = ({ title, value, currency, button, disabled, onClick }) => {

   return (
      <div className={s.panel}>
         <p>{title}</p>
         <h3>{value}</h3>
         <b>{currency}</b>
         <span 
            className={disabled ? s.disabled : null}
            onClick={onClick}
         >{button}</span>
      </div>
   );
};
