import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Stake from "./components/stake/Stake";
import Manage from "./components/manage/Manage";
import Worklock from "./components/worklock/worklock";
import Withdraw from "./components/withdraw/Withdraw";
import Loader from "./components/loader/Loader";
import "./App.css";
import ServiceWeb3 from './services/web3-service'
const serviceWeb3 = new ServiceWeb3();

//
//
class App extends React.Component {
  state = {
    manageData: null,
    buttonStatus: 'loading'
  }


  componentDidMount(){
    // serviceWeb3.getStakerBalAddr().then(res => console.log(res))
    // serviceWeb3.getFooterData().then(res => console.log(res))
    serviceWeb3.getManageData().then(res => this.setState({manageData: res}))
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


  async getBlockChainData () {
    this.setState({ buttonStatus: "loading" });

    // const web3 = new Web3(window["ethereum"]);

    // await window.ethereum.enable();

    // const accounts = await web3.eth.getAccounts();
    // const network = await web3.eth.net.getNetworkType();

    // INSTANCES


    // MAIN DATA


    // // USER DATA
    // // Get Nu balance
    // const nuNitsBalance = await instanceToken.methods
    //   .balanceOf(accounts[0])
    //   .call();
    // // const nuBalance = (parseFloat(nuNitsBalance) / 10 ** 18).toLocaleString(
    // //   "en-Us"
    // // );
    // // Get all users tokens
    // const allUserNuNits = await instanceEscrow.methods
    //   .getAllTokens(accounts[0])
    //   .call();
    // const allUserNu = (parseFloat(allUserNuNits) / 10 ** 18).toLocaleString(
    //   "en-Us"
    // );
    // // Get users locked tokens
    // const lockedUserNuNits = await instanceEscrow.methods
    //   .getLockedTokens(accounts[0], 0)
    //   .call();
    // const lockedUserNu = (
    //   parseFloat(lockedUserNuNits) /
    //   10 ** 18
    // ).toLocaleString("en-Us");
    // // Available NuNits to withdraw
    // const nuNitsToWithdraw = allUserNuNits - lockedUserNuNits;
    // const nuToWithdraw = (
    //   parseFloat(nuNitsToWithdraw) /
    //   10 ** 18
    // ).toLocaleString("en-Us");
    // // nodes
    // const nodes = await instancePolicy.methods.nodes(accounts[0]).call();


    // // get substake length by substake index
    // const getSubStakesLength = await instanceEscrow.methods
    //   .getSubStakesLength(stakerAddr)
    //   .call();

    // for (let i = 0; i < getSubStakesLength; i++) {
    //   const list = await instanceEscrow.methods
    //     .getSubStakeInfo(stakerAddr, i)
    //     .call();
    //   // console.log(list);
    // }

    // this.setState({
    //   address: accounts[0],
    //   nuNitsBalance: nuNitsBalance,
    //   currentPeriod: currentPeriod,
    //   getActiveStakers: getActiveStakers.activeStakers.length,
    //   percentOfLockedNu: percentOfLockedNu,
    //   lockedNu: lockedNu,
    //   network: network,
    //   nuNitsToWithdraw: nuNitsToWithdraw,
    //   buttonStatus: "ok"
    // });


  }


  render() {
    console.log(this.state.manageData);
    return (
      <BrowserRouter>
        <div className="my_wrapper">
          <Header
            address={this.state.address}
            network={this.state.network}
            buttonStatus={this.state.buttonStatus}
            onClick={this.handleClick}></Header>

          <div className="my_content_wrapper">
            <Route path="/" exact>
              <Redirect to="/stake" />
            </Route>
            <Route
              path="/stake"
              exact
              render={() => (
                <Stake
                  balance={this.state.nuNitsBalance}
                  isAuthed={this.state.address}
                />
              )}
            />
            <Route path="/manage" component={Manage} />
            <Route path="/worklock" component={Worklock} />
            <Route
              path="/withdraw"
              render={() => (
                <Withdraw nuNitsToWithdraw={this.state.nuNitsToWithdraw} />
              )}
            />
          </div>

          {this.state.buttonStatus === "loading" ? (
            <Loader />
          ) : (
            <Footer
              currentPeriod={this.state.currentPeriod}
              getActiveStakers={this.state.getActiveStakers}
              percentOfLockedNu={this.state.percentOfLockedNu}
              lockedNu={this.state.lockedNu}
            />
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
