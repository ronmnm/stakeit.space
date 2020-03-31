import React from "react";
import "./App.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Stake from "./components/stake/Stake";
import Manage from "./components/manage/Manage";
import Worklock from "./components/worklock/worklock";
import Withdraw from "./components/withdraw/Withdraw";
import FooterLoader from "./components/loader/footer-loader";
import MainSpinner from "./components/loader/main-spinner";

import ServiceWeb3 from "./services/web3-service";
import ServiceWeb3Setters from "./services/web3-service-setters";
import WorklockService from "./services/worklock-service";

const serviceWeb3 = new ServiceWeb3();
const serviceSetters = new ServiceWeb3Setters();
const worklockService = new WorklockService();

class App extends React.Component {
  state = {
    manageData: null,
    stakeData: null,
    footerData: null,
    withdrawData: null, /////
    setters: null,
    worklockData: null,
    buttonStatus: "loading",
    footerStatus: "loading"
  };

  componentDidMount() {
    if (typeof window.ethereum !== "undefined") {
      if (window.ethereum.networkVersion === "5"){
        serviceWeb3.getStakerBalAddr().then(res =>
          this.setState({
            stakeData: res,
            buttonStatus: 'ok'
          })
        );


        serviceWeb3
          .getFooterData()
          .then(res => this.setState({ footerData: res, footerStatus: "done" }));
        serviceWeb3
          .getManageData()
          .then(res => this.setState({ manageData: res }));
        serviceSetters.getSetters().then(res => this.setState({ setters: res }));
        worklockService
          .getWorklockData()
          .then(res => this.setState({ worklockData: res }));
      } else { this.setState({ buttonStatus: 'wrong' }) }
    } else {
      this.setState({ buttonStatus: "install" });
    }
  }

  async handleClick() {
    await window.ethereum.enable();
    // this.setState({ isConnected: true });
    // this.getBlockChainData();
  }

  // async componentDidMount() {
  //   if (typeof window.ethereum !== "undefined") {
  //     // Metamask installed
  //     // const web3 = new Web3(window.ethereum);
  //     console.log("metamask installed");

  //     // const web3 = new Web3(window.ethereum);
  //     // console.log(window.ethereum.selectedAddress)
  //     // console.log(account)
  //     // (window.ethereum.selectedAddress == null) || (typeof window.ethereum.selectedAddress === undefined)
  //     try {
  //       await window.ethereum.enable()
  //     } catch (error) {
  //       console.log("user denied logging")
  //       this.setState({buttonStatus: 'connect'})
  //     }

  //     if (window.ethereum.networkVersion === "5") {
  //       if (typeof window.ethereum.selectedAddress !== "string") {
  //         console.log("акаунт не подключен");
  //         this.setState({ buttonStatus: "connect" });
  //         console.log(typeof window.ethereum.selectedAddress);
  //       } else {
  //         this.setState({ buttonStatus: "ok" });

  //         console.log("подключен аккаунт");
  //         console.log(window.ethereum.networkVersion);
  //         // this.getBlockChainData();
  //       }
  //     } else {
  //       console.log(window.ethereum.networkVersion);
  //       this.setState({ buttonStatus: "wrong" });
  //     }
  //   } else {
  //     // Metamask not installed
  //     this.setState({ buttonStatus: "install" });
  //     console.log("please install metamask");
  //     // this.setState({ isLoading: false });
  //   }
  // }

  render() {
    const {
      buttonStatus,

      // objects
      stakeData,
      manageData,
      footerData,
      footerStatus,
      worklockData
    } = this.state;

    let manageComponent = <MainSpinner />;
    if (buttonStatus === "install") {
      manageComponent = <div> install metamask</div>;
    } else if (manageData) {
      manageComponent = (
        <Manage
          manageData={manageData}
          setters={this.state.setters}
          setWinddown={this.state.setWinddown}
        />
      );
    }

    let account;
    if (stakeData) {
      account = stakeData.account;
    }

    console.log(worklockData);

    worklockData ? console.log(worklockData.methods) : console.log("hi");

    return (
      <BrowserRouter>
        <div className="my_wrapper">
          <Header
            account={account}
            network={this.state.network}
            buttonStatus={buttonStatus}
            onClick={this.handleClick}
            // account={this.stakeData.account}
          />

          <div className="my_content_wrapper">
            {/* STAKE Component */}
            <Route path="/" exact>
              <Redirect to="/stake" />
            </Route>
            <Route
              path="/stake"
              render={() => <Stake stakeData={stakeData} />}
            />
            {/* END STAKE Component */}

            {/* MANAGE Component */}
            <Route path="/manage" render={() => manageComponent} />
            {/* END MANAGE Component */}

            {/* WORKLOCK Component */}
            <Route path="/worklock" component={Worklock} />
            {/* END WORKLOCK Component */}

            {/* WITHDRAW Component */}
            <Route path="/withdraw" render={() => <Withdraw />} />
            {/* END WITHDRAW Component */}
          </div>

          {footerStatus === "loading" ? (
            <FooterLoader />
          ) : (
            <Footer footerData={footerData} />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
