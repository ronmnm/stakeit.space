import React from "react";
// import Web3 from "web3";
import s from "./Address.module.css";
import Blockies from "react-blockies";

export default class Address extends React.Component {
  render() {
    const {account} = this.props;
    return (
      <React.Fragment>
        
          {/* <span>{this.props.network}</span> */}
          <div className={s.my_address_item}>
            <div className={s.my_ident_icon}>
              <Blockies
                seed={account}
                size={7}
                scale={3}
                color="#B692BE"
                // bgColor="#E885B4"
                spotColor="#18335E"
              />
            </div>
            <div className={s.my_address_text}>
            {account.slice(0, 6)}...{account.slice(38, 42)}
            </div>
          </div>
        
      </React.Fragment>
    );
  }
}
