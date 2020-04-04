// import Web3 from "web3";
import React from "react";
import s from "./Stake.module.css";
import ConfirmationText from "./confirm-text";
import StakeService from "../../services/stake-service";

const stakeService = new StakeService();

export default class Stake extends React.Component {
   state = {
      inputAmount: null,
      inputDuration: null,
      balanceNu: "",
      clicked: false,
      approveAndCall: null
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
      this.state.approveAndCall(
         this.state.amount,
         this.state.inputDuration
      )
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
      // {parseFloat(nuBalance).toFixed(2)}
      let disable = s.disable;
      if (this.state.amount && this.state.inputDuration) {
         disable = null;
      }

      if (this.state.clicked) {
         return (
            <div className={s.my_stake}>
               <h3>add new stake</h3>
               <div>
                  <ConfirmationText account={this.props.account} />

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
                     onClick={event =>
                        this.setState({ amount: balanceNu })
                     }>
                     Balance: <b>{balanceNu}</b> NU
                  </span>
               </div>

               <form action="" className={s.my_form}>
                  <input
                     onChange={e =>
                        this.setState({ amount: e.target.value })
                     }
                     placeholder="15000"
                     className={s.my_input}
                     autoComplete="off"
                     type="text"
                     name="nuAmount"
                     value={this.state.amount || ''}
                     
                  />
                  <div className={s.stake_info}>
                     <span>Duration:</span>
                  </div>
                  <input
                     onChange={event =>
                        this.setState({ inputDuration: event.target.value })
                     }
                     value={this.state.inputDuration || ""}
                     placeholder="30"
                     className={s.my_input}
                     autoComplete="off"
                     type="text"
                     name="duration"
                     
                  />
                  <div className={s.slider}>
                     <input
                        type="range"
                        min="30"
                        step="1"
                        value={
                           !this.state.inputDuration
                              ? 30
                              : this.state.inputDuration
                        }
                        max="365"
                        onChange={event =>
                           this.setState({ inputDuration: event.target.value })
                        }
                     />
                     <div>
                        <span>30</span>
                        <span>365</span>
                     </div>
                  </div>

                  {/* Button group */}
                  <div className={s.button_group}>
                     <button
                        className={`${s.button_stake_it} ${disable}`}
                        onClick={this.onButtonClick}>
                        Stake It!
                     </button>
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
