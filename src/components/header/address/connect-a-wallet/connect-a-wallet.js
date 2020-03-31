import React from "react";
// import Web3 from "web3";
import s from "./connect-a-wallet.module.css";

export default class ConnectWallet extends React.Component {

  render() {
    return (
      <div className={s.my_address}>
        <span></span>
        <div className={s.my_address_item_blue} onClick={this.props.onClick} >
          
          <div className={s.connect_a_wallet}>Connect a wallet</div>
          
        </div>
        
      </div>
    );
  }
}
