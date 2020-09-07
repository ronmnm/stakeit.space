import React, {useRef, useState} from 'react';
import s from './worklock.module.css';
import RoundSpinner from '../loader/7.svg';
import Modal from './modal/modal';
import {ModalContent} from '../manage/worker/set-worker-modal';
import {ModalButton} from '../buttons/buttons';
import {connect} from 'react-redux';
import MainSpinner from '../loader/main-spinner';
import {ParticipantPanel} from './ParticipantPanel';

const WorkLock = ({
   isWorklockDataLoading,
   account,
   biddingStartDate,
   biddingEndDate, 
   cancellationTimeRemaining,
   biddingTimeRemaining,

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
   // completedWork,
   аvailableRefund,
   // getRemainingWork,
   tokenSupply,
   bonusTokenSupply,
   claimed,
   // refundedWork,
   refund,
   cancelBid,
   makeBid,
}) => {
   const [refundSpin, setRefundSpin] = useState(false);
   const [claimSpin, setClaimSpin] = useState(false);
   const [cancelSpin, setCancelSpin] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const [isValid, setIsValid] = useState(true);
   const [bidValue, setBidValue] = useState('')

   const modalRef = useRef();

   if (isWorklockDataLoading) return <MainSpinner />;

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
      isClaimed = 'Yes';
   } else {
      isClaimed = 'No';
   }
   

   let refund_disable;
   if (аvailableRefund > 0) {
      refund_disable = false;
   } else refund_disable = true;

   const onRefundClick = async e => {
      e.preventDefault();
      setRefundSpin(true);
      refund()
         .then(() => {
            setRefundSpin(false);
         })
         .catch(() => {
            setRefundSpin(false);
         });
   };

   const onClaimClick = e => {
      e.preventDefault();
      setClaimSpin(true);
      claimTokens()
         .then(() => {
            setClaimSpin(false);
         })
         .catch(() => {
            setClaimSpin(false);
         });
   };

   const onCancelBidClick = e => {
      e.preventDefault();
      setCancelSpin(true);
      cancelBid()
         .then(() => {
            setCancelSpin(false);
         })
         .catch(() => {
            setCancelSpin(false);
         });
   };

   const openModal = e => {
      e.preventDefault();
      modalRef.current.openMod();
   };
   const closeModal = () => {
      modalRef.current.closeMod();
   };

  function handleBid() {
    setIsLoading(true)
    makeBid(bidValue)
      .then(() => {
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }

   // console.log(props.worklockData);
   return (
      <div className={s.worklock_wrapper}>
         <Modal ref={modalRef}>
            <ModalContent isValid={isValid}>
                  <span>Place new escrow</span>
                  <div>
                  <b>Minimum escrow is 5ETH.</b>
                  <label htmlFor="">Enter escrow amount (ETH):</label>
                  <input
                    placeholder="0.0"
                    value={bidValue}
                    onChange={(e) => setBidValue(e.target.value)}
                  />
               </div>
               <div className="button_wrapper">
                  <ModalButton onClick={closeModal} background="#444" background_hover="#484848">
                     Cancel
                  </ModalButton>
                  <ModalButton
                      blue
                      onClick={handleBid}
                      background="#0077ff"
                      style={isLoading || +bidValue < 5 ? {pointerEvents: 'none'} : null}
                      background_hover="#1683ff">
                      {isLoading ? (
                        <img style={{ marginTop: "10px" }} src={RoundSpinner} alt="React Logo" />
                      ) : (
                        "Confirm"
                      )}
                  </ModalButton>
               </div>
            </ModalContent>
         </Modal>
         <div className={s.worklock_participant}>
            <div className={s.participant_address}>
               <span>
                  Participating with address:
                  <br />
                  <b>{account}</b>
               </span>
               <div onClick={openModal}>Place Escrow</div>
            </div>
            <div className={s.participant_panels}>
               <ParticipantPanel
                  title="Your current escrow:"
                  value={currentBid}
                  currency="ETH"
                  button={
                     cancelSpin ? <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" /> : 'Cancel Bid'
                  }
                  disabled={disableCanBtn}
                  onClick={onCancelBidClick}
               />
               <ParticipantPanel
                  title="Nu tokens allocation:"
                  value={tokensAllocated.toLocaleString('en-Us')}
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
                  button={
                     refundSpin ? <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" /> : 'Refund'
                  }
                  disabled={refund_disable}
                  onClick={onRefundClick}
               />
            </div>
         </div>

         <div className={s.worklock_timeline}>
            <h3>TIMELINE</h3>
            <div className={s.timeline_container}>
               <div>
                  <span>Escrow Start Date</span>
                  <h4>{biddingStartDate}</h4>
               </div>
               <div>
                  <span>Escrow End Date</span>
                  <h4>{biddingEndDate}</h4>
               </div>
               <div>
                  <span>Escrow Ends In</span>
                  <h4>{biddingTimeRemaining}</h4>
               </div>
               <div>
                  <span>Escrow Cancel Time Remaining</span>
                  <h4>{cancellationTimeRemaining}</h4>
               </div>
            </div>
         </div>

         <div className={s.economics}>
            <h3>ECONOMICS</h3>
            <div className={s.economics_container}>
               <div className={s.economics_top_row}>
                  <div>
                     <span>Minimal allowed escrow</span>
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
                     <h4 style={{ color: '#0077FF' }}>{isClaimed}</h4>
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
      </div>
   );
};

const mapDispatchToProps = ({ user }) => ({
   isWorklockDataLoading: user.isWorklockDataLoading,
   account: user.account,
   ...user.worklock,
});
export default connect(mapDispatchToProps)(WorkLock);

class Bid extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: '' };

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
            <span>Enter escrow amount:</span>
            <input value={this.state.value} onChange={this.onChange} placeholder="ETH Amount" type="text" />
            <button className={s.button_disabled}>Place Bid!</button>
         </form>
      );
   }
}
