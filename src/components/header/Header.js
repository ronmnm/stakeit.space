import React from "react";
// import Nav from "./Nav";
import Address from "./address/Address";
import "./Header.css";
import LoadingAddress from "./address/loading-address/Address-loading";
import ConnectWallet from "./address/connect-a-wallet/connect-a-wallet";
import WrongNetwork from "./address/wrong-network/wrong-network";
import InstallMetamask from "./address/install-metamask/install-metamask";

import { NavLink } from "react-router-dom";
// import "./Nav.css";

export default class Header extends React.Component {
  // state = {
  //   connected: null
  // }

  render() {
    let addressButton;

    switch (this.props.buttonStatus) {
      case "loading":
        addressButton = <LoadingAddress />;
        break;
      case "wrong":
        addressButton = <WrongNetwork />;
        break;
      case "ok":
        addressButton = <Address account={this.props.account} />;
        break;
      case "connect":
        addressButton = <ConnectWallet onClick={this.props.onClick} />;
        break;
      case "install":
        addressButton = <InstallMetamask />;
        break;
      default:
        console.log("default case switch");
    }

    return (
      <div className="my_header">
        <div className="logo">
          <span>stakeit.space</span>
        </div>
        <div className="my_nav">
          <NavLink className="my_nav_item" to="/stake">
            Stake
          </NavLink>
          <NavLink className="my_nav_item" to="/manage/substake-list">
            Manage
          </NavLink>
          <NavLink className="my_nav_item disable" to="/rewards">
            Rewards
          </NavLink>
          <NavLink className="my_nav_item" to="/worklock">
            Worklock
          </NavLink>
        </div>

        {/* <Address account={this.props.account} /> */}
        {/* {addressButton} */}
        <div className="my_address">{addressButton}</div>
      </div>
    );
  }
}
