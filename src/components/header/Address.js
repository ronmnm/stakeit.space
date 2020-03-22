import React from "react";
// import Web3 from "web3";
import "./Address.css";
import Blockies from "react-blockies";

export default class Address extends React.Component {
  render() {
    return (
      <div className="my_address">
        <span>{this.props.network}</span>
        <div className="my_address_item">
          <div className="my_ident_icon">
            <Blockies
              seed={this.props.address}
              size={4}
              scale={5}
              color="#B692BE" 
              // bgColor="#E885B4"
              spotColor="#18335E"
            />
          </div>
          <div className="my_address_text">
            {`${this.props.address.slice(0, 6)}...${this.props.address.slice(
              38,
              42
            )}`}
          </div>
          
        </div>
        
      </div>
    );
  }
}
