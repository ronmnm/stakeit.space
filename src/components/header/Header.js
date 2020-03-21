import React from "react";
import Nav from "./Nav";
import Address from "./Address";
import "./Header.css";

export default props => {
  return (
    <div className="my_header">
      <div className="logo"></div>

      <Nav />

      <Address address={props.address}/>
    </div>
  );
};
