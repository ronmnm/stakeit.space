// import Web3 from "web3";
import React from "react";
import ReactGA from "react-ga";

import s from "./Stake.module.css";
import ConfirmationText from "./confirm-text";
import StakeService from "../../services/stake-service";
import RoundSpinner from '../loader/7.svg';

const stakeService = new StakeService();

export default class Stake extends React.Component {
   state = {
      balanceNu: "",
      clicked: false,
      confirmBtnLoading: false
   };

   constructor(props) {
      super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
      this.confirmationClick = this.confirmationClick.bind(this);
   }

   async confirmationClick() {
      this.setState({ confirmBtnLoading: true });
      ReactGA.event({
         category: 'Stake tab',
         action: 'Confirm button click',
         label: 'stake_tab_label'
      })
      const approveAndCall = stakeService.getApproveAndCall();
      await approveAndCall(this.props.amount, this.props.duration);

      this.setState({ confirmBtnLoading: false });
   }

   onButtonClick(e) {
      e.preventDefault();
      ReactGA.event({
         category: 'Stake tab',
         action: 'Click Stake It button',
         label: 'stake_tab_label'
      })

      this.setState({ clicked: true });
   }

   render() {
      const { amount, duration } = this.props;

      let balanceNu = 0;
      if (this.props.stakeData !== null) {
         balanceNu = this.props.stakeData.balanceNu.toFixed(0);
      }

      let amount_error;
      if (amount >= 15000 || amount === null) {
         amount_error = null;
      } else {
         amount_error = s.amount_error;
      }

      let duration_error;
      if ((duration >= 30 && duration <= 365) || duration === null) {
         duration_error = null;
      } else {
         duration_error = s.amount_error;
      }

      let disable = s.disable;
      if (duration >= 30 && duration <= 365 && amount >= 15000) {
         disable = null;
      }

      let ConfirmButtonContent = "Confirm";
      if (this.state.confirmBtnLoading === true) {
         ConfirmButtonContent = <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" />
      }
      // (this.state.amountError) ? amount_error = s.amount_error : amount_error = null;

      if (this.state.clicked) {
         return (
            <div className={s.my_stake}>
               <h4>add new stake</h4>
               <div>
                  <ConfirmationText
                     account={this.props.account}
                     amount={amount}
                     duration={duration}
                  />

                  <div className={s.button_group_confirm}>
                     <span
                        className={s.back_button}
                        onClick={() => {
                           this.setState({ clicked: false });
                        }}>
                        Back
                     </span>
                     <span
                        className={`${s.confirm_button}`}
                        onClick={this.confirmationClick}>
                        {ConfirmButtonContent}
                     </span>
                  </div>
               </div>
            </div>
         );
      }

      return (
         <div className={s.my_stake}>
            <h4>Add New Stake</h4>
            <div className={s.form_container}>
               <div className={s.stake_info}>
                  <span>Amount:</span>
                  <span
                     className={s.balance_click}
                     onClick={e => this.props.handleAmount(balanceNu)}>
                     Balance: <b>{balanceNu}</b> NU
                  </span>
               </div>

               <form action="" className={s.my_form}>
                  <div className={s.input_container}>
                     <label htmlFor="NU">NU</label>
                     <input
                        onChange={e => this.props.handleAmount(e.target.value)}
                        placeholder="15000"
                        className={`${s.my_input} ${amount_error}`}
                        autoComplete="off"
                        type="text"
                        name="nuAmount"
                        value={amount || ""}
                     />
                  </div>
                  <div className={s.stake_info}>
                     <span>Duration:</span>
                  </div>
                  <div className={s.input_container}>
                     <label htmlFor="days">days</label>
                     <input
                        onChange={e =>
                           this.props.handleDurationState(e.target.value)
                        }
                        value={duration || ""}
                        placeholder="30"
                        className={`${s.my_input} ${duration_error}`}
                        autoComplete="off"
                        type="text"
                        name="duration"
                     />
                  </div>
                  <div className={s.slider}>
                     <input
                        type="range"
                        min="30"
                        step="1"
                        value={duration || "30"}
                        max="365"
                        onChange={e =>
                           this.props.handleDurationState(e.target.value)
                        }
                     />
                     <div>
                        <span>30</span>
                        <span>365</span>
                     </div>
                  </div>

                  {/* Button group */}
                  <div className={s.button_group}>
                     <span
                        className={`${s.button_stake_it} ${disable}`}
                        onClick={this.onButtonClick}>
                        Stake It!
                     </span>
                     <span className={s.text_above_button}>
                        Enter amount and duration to continue.
                     </span>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

