import React from "react";
// import Web3 from "web3";
import "./connect-a-wallet.css";

export default class ConnectWallet extends React.Component {

  render() {
    return (
      <div className="my_address">
        <span></span>
        <div className="my_address_item_blue" onClick={this.props.onClick} >
          
          <div className="connect_a_wallet">Connect a wallet</div>
          
        </div>
        
      </div>
    );
  }
}
