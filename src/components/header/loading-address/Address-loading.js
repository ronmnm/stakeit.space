import React from "react";
// import Web3 from "web3";
import "./Address-loading.css";
import Blockies from "react-blockies";

export default class Address extends React.Component {
  render() {
    return (
      <div className="my_address">
        <span></span>
        <div className="my_address_item">
          
          <div class="loader">Loading...</div>
          
        </div>
        
      </div>
    );
  }
}
