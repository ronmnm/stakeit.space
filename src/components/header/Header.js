import React from "react";
import Nav from "./Nav";
import Address from "./Address";
import "./Header.css";

export default props => {
  let AddressButton = null;
  if (typeof window.ethereum == 'undefined' || window.ethereum.selectedAddress == null) {
    console.log('connect a wallet')
  } else {
    console.log('thats ok')
  }
  return (
    <div className="my_header">
      <div className="logo">nucypher.com</div>

      <Nav />

      <Address address={props.address} network={props.network} />
    </div>
  );
};
