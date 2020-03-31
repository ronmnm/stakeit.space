import React from "react";
// import Web3 from "web3";
import s from "./wrong-network.module.css";

export default class ConnectWallet extends React.Component {

  render() {
    return (
      <React.Fragment>
        
        <div className={s.my_address_item_wrong} >
          
          <div className={s.wrong_network}>Wrong Network</div>
          
        </div>
        
        </React.Fragment>
    );
  }
}
