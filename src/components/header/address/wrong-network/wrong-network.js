import React from "react";
// import Web3 from "web3";
import "./wrong-network.css";

export default class ConnectWallet extends React.Component {

  render() {
    return (
      <div className="my_address">
        <span></span>
        <div className="my_address_item_wrong" >
          
          <div className="wrong_network">Wrong Network</div>
          
        </div>
        
      </div>
    );
  }
}
