import React from "react";
// import Web3 from "web3";
import "./install-metamask.css";

export default class ConnectWallet extends React.Component {

  render() {
    return (
      <div className="my_address">
        <span></span>
        <div className="my_address_item_install" onClick={this.props.onClick} >
          
          <div className="connect_a_wallet">Install Metamask</div>
          
        </div>
        
      </div>
    );
  }
}
