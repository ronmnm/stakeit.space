import React from "react";
import Nav from "./Nav";
import Address from "./address/Address";
import "./Header.css";
import LoadingAddress from "./address/loading-address/Address-loading";
import ConnectWallet from "./address/connect-a-wallet/connect-a-wallet";
import WrongNetwork from "./address/wrong-network/wrong-network";
import InstallMetamask from './address/install-metamask/install-metamask'

export default class Header extends React.Component {
  // state = {
  //   connected: null
  // }

  render() {
    let addressButton;

    // if (this.props.isConnected) {
    //   if (this.props.isLoading) {
    //     addressButton = <LoadingAddress />;
    //   } else {
    //     addressButton = (
    //       <Address address={this.props.address} network={this.props.network} />
    //     );
    //   }
    // } else {
    //   addressButton = <ConnectWallet onClick={this.props.onClick} />;
    // }

    switch (this.props.buttonStatus) {
      case "loading":
        addressButton = <LoadingAddress />;
        break;
      case "wrong":
        addressButton = <WrongNetwork />;
        break;
      case "ok":
        addressButton = (
          <Address address={this.props.address} network={this.props.network} />
        );
        break;
      case "connect":
        addressButton = <ConnectWallet onClick={this.props.onClick} />;
        break;
      case "install":
        addressButton = <InstallMetamask />;
        break;
      default: console.log('deaulf case switch')
    }

    return (
      <div className="my_header">
        <div className="logo">nucypher.com</div>
        <Nav />
        {addressButton}
      </div>
    );
  }
}
