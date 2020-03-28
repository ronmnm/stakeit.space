// import Web3 from "web3";
import React from "react";
import "./Stake.css";

export default class Stake extends React.Component {
  state = {
    inputAmount: "",
    inputDuration: ""
  };

  // handleAmountInput() {
  //     console.log('this.state.balanceClick')
  //   }

  render() {
    const {balance} = this.props;
    const nuBalance = (parseFloat(balance) / 10 ** 18).toFixed(0)
    // console.log(this.state.inputAmount);
    return (
      <div className="my_stake">
        <h3>add new stake</h3>
        <div className="stake_info">
          <span>Amount:</span>
          <span
            className="balance_click"
            onClick={event =>
              this.setState({ inputAmount: nuBalance })
            }>
            Balance: <b>{nuBalance}</b> NU
          </span>
        </div>

        <form action="" className="my_form">
          <input
            onChange={event =>
              this.setState({ inputAmount: event.target.value })
            }
            placeholder="15000"
            className="my_input"
            autoComplete="off"
            type="text"
            name="name"
            value={this.state.inputAmount}
            required
          />
          <div className="stake_info">
            <span>Duration:</span>
          </div>
          <input
            onChange={event =>
              this.setState({ inputAmount: event.target.value })
            }
            placeholder="30"
            className="my_input"
            autoComplete="off"
            type="text"
            name="name"
            required
          />

          {/* Button group */}
          <div className="button_group">
            <span className="text_above_button">
              Enter amount and duration to continue.
            </span>
            <button className="button_stake_it">Stake It!</button>
          </div>
        </form>
      </div>
    );
  }
}
