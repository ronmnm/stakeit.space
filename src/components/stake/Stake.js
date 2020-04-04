// import Web3 from "web3";
import React from "react";
import s from "./Stake.module.css";
import ConfirmationText from "./confirm-text";
import StakeService from "../../services/stake-service";

const stakeService = new StakeService();

export default class Stake extends React.Component {
   state = {
      amount: null,
      duration: null,
      balanceNu: "",
      clicked: false,
      approveAndCall: null,
      // amountError: false,
      durationError: false
   };
   constructor(props) {
      super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
      this.confirmationClick = this.confirmationClick.bind(this);
   }

   componentDidMount() {
      const approveAndCall = stakeService.getApproveAndCall();
      this.setState({ approveAndCall: approveAndCall });
      // console.log(approveAndCall)
   }
   confirmationClick() {
      this.state.approveAndCall(this.state.amount, this.state.duration);
   }

   onButtonClick(e) {
      e.preventDefault();

      this.setState({ clicked: true });
   }

   render() {
      // const {balanceNu} = this.props.stakeData;

      let balanceNu = 0;
      if (this.props.stakeData !== null) {
         balanceNu = this.props.stakeData.balanceNu;
      }

      let amount_error;
      if (this.state.amount >= 15000 || this.state.amount === null) {
         amount_error = null;
      } else {
         amount_error = s.amount_error;
      }

      let duration_error;
      if (
         (this.state.duration >= 30 && this.state.duration <= 365) ||
         this.state.duration === null
      ) {
         duration_error = null;
      } else {
         duration_error = s.amount_error;
      }

      let disable = s.disable;
      if (
         this.state.duration >= 30 &&
         this.state.duration <= 365 &&
         this.state.amount >= 15000
      ) {
         disable = null;
      }

      // (this.state.amountError) ? amount_error = s.amount_error : amount_error = null;

      if (this.state.clicked) {
         return (
            <div className={s.my_stake}>
               <h3>add new stake</h3>
               <div>
                  <ConfirmationText
                     account={this.props.account}
                     amount={this.state.amount}
                     duration={this.state.duration}
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
                        className={s.confirm_button}
                        onClick={this.confirmationClick}>
                        Confirm
                     </span>
                  </div>
               </div>
            </div>
         );
      }

      return (
         <div className={s.my_stake}>
            <h3>add new stake</h3>
            <div className={s.form_container}>
               <div className={s.stake_info}>
                  <span>Amount:</span>
                  <span
                     className={s.balance_click}
                     onClick={event => this.setState({ amount: balanceNu })}>
                     Balance: <b>{balanceNu}</b> NU
                  </span>
               </div>

               <form action="" className={s.my_form}>
                  <input
                     onChange={e => this.setState({ amount: e.target.value })}
                     placeholder="15000"
                     className={`${s.my_input} ${amount_error}`}
                     autoComplete="off"
                     type="text"
                     name="nuAmount"
                     value={this.state.amount || ""}
                  />
                  <div className={s.stake_info}>
                     <span>Duration:</span>
                  </div>
                  <input
                     onChange={event =>
                        this.setState({ duration: event.target.value })
                     }
                     value={this.state.duration || ""}
                     placeholder="30"
                     className={`${s.my_input} ${duration_error}`}
                     autoComplete="off"
                     type="text"
                     name="duration"
                  />
                  <div className={s.slider}>
                     <input
                        type="range"
                        min="30"
                        step="1"
                        value={this.state.duration || "30"}
                        max="365"
                        onChange={event =>
                           this.setState({ duration: event.target.value })
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

// const Form = () => {
//    return (

//    )
// }
