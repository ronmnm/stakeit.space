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
import Web3 from "web3";
import { TOKEN_ABI, TOKEN_ADDRESS } from "./ethereum/instances/token";
import {
  STAKING_ESCROW_ABI,
  STAKING_ESCROW_ADDRESS
} from "./ethereum/instances/staking-escrow";
import {
  POLICY_MANAGER_ADDRESS,
  POLICY_MANAGER_ABI
} from "./ethereum/instances/policy-manager";
import { WORKLOCK_ADDRESS, WORKLOCK_ABI } from "./ethereum/instances/worklock";

//
//
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "",
      nuNitsBalance: "",
      currentPeriod: "",
      getStakersLength: "",
      percentOfLockedNu: "",
      lockedNu: "",
      nuNitsToWithdraw: "",

      hasAccessToMetamask: null,
      // isConnected: null,
      // isLoading: null,
      buttonStatus: 'loading'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  async handleClick() {
    await window.ethereum.enable();
    // this.setState({ isConnected: true });
    this.getBlockChainData();
  }
  async componentDidMount() {
    if (typeof window.ethereum !== "undefined") {
      // Metamask installed
      // const web3 = new Web3(window.ethereum);
      console.log("metamask installed");

      // const web3 = new Web3(window.ethereum);
      // console.log(window.ethereum.selectedAddress)
      // console.log(account)
      // (window.ethereum.selectedAddress == null) || (typeof window.ethereum.selectedAddress === undefined)
      try {
        await window.ethereum.enable()
      } catch (error) {
        console.log("user denied logging")
        this.setState({buttonStatus: 'connect'})
      }
      

      if (window.ethereum.networkVersion === "5") {
        if (typeof window.ethereum.selectedAddress !== "string") {
          console.log("акаунт не подключен");
          this.setState({ buttonStatus: "connect" });
          console.log(typeof window.ethereum.selectedAddress);
        } else {
          this.setState({ buttonStatus: "ok" });

          console.log("подключен аккаунт");
          console.log(window.ethereum.networkVersion);
          this.getBlockChainData();
        }
      } else {
        console.log(window.ethereum.networkVersion);
        this.setState({ buttonStatus: "wrong" });
      }
    } else {
      // Metamask not installed
      this.setState({ buttonStatus: "install" });
      console.log("please install metamask");
      // this.setState({ isLoading: false });
    }
  }


  async getBlockChainData() {
    this.setState({ buttonStatus: "loading" });

    const web3 = new Web3(window["ethereum"]);

    // await window.ethereum.enable();

    const accounts = await web3.eth.getAccounts();
    const network = await web3.eth.net.getNetworkType();

    // INSTANCES

    // Token Instance
    const instanceToken = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);
    // Escrow Instance
    const instanceEscrow = new web3.eth.Contract(
      STAKING_ESCROW_ABI,
      STAKING_ESCROW_ADDRESS
    );
    // Policy manage Instance
    const instancePolicy = new web3.eth.Contract(
      POLICY_MANAGER_ABI,
      POLICY_MANAGER_ADDRESS
    );

    // MAIN DATA
    //
    // Get total supply
    const totalNuSupply = await instanceToken.methods.totalSupply().call();

    // Get Footer info
    // Get Current Period
    const currentPeriod = await instanceEscrow.methods
      .getCurrentPeriod()
      .call();

    // Get number of stakers
    // const getStakersLength = await instanceEscrow.methods
    //   .getStakersLength()
    //   .call();

    // Get number of active stakers and locked amount
    const getActiveStakers = await instanceEscrow.methods
      .getActiveStakers(1, 0, 0)
      .call();
    // Calculate locked amount in NU form NuNits
    const lockedNu = (
      parseFloat(getActiveStakers[0]) /
      10 ** 18
    ).toLocaleString("en-Us");
    // Calculate % of locked tokens
    const percentOfLockedNu = (
      (getActiveStakers[0] / totalNuSupply) *
      100
    ).toFixed(2);

    //

    //
    // USER DATA
    // Get Nu balance
    const nuNitsBalance = await instanceToken.methods
      .balanceOf(accounts[0])
      .call();
    // const nuBalance = (parseFloat(nuNitsBalance) / 10 ** 18).toLocaleString(
    //   "en-Us"
    // );
    // Get all users tokens
    const allUserNuNits = await instanceEscrow.methods
      .getAllTokens(accounts[0])
      .call();
    const allUserNu = (parseFloat(allUserNuNits) / 10 ** 18).toLocaleString(
      "en-Us"
    );
    // Get users locked tokens
    const lockedUserNuNits = await instanceEscrow.methods
      .getLockedTokens(accounts[0], 0)
      .call();
    const lockedUserNu = (
      parseFloat(lockedUserNuNits) /
      10 ** 18
    ).toLocaleString("en-Us");
    // Available NuNits to withdraw
    const nuNitsToWithdraw = allUserNuNits - lockedUserNuNits;
    const nuToWithdraw = (
      parseFloat(nuNitsToWithdraw) /
      10 ** 18
    ).toLocaleString("en-Us");
    // nodes
    const nodes = await instancePolicy.methods.nodes(accounts[0]).call();

    // get worker
    // const workerAddr = await instanceEscrow.methods
    //   .getWorkerFromStaker(stakerAddr)
    //   .call();
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

    //
    // SET STATE
    // this.setState({  });
    this.setState({
      address: accounts[0],
      nuNitsBalance: nuNitsBalance,
      currentPeriod: currentPeriod,
      getActiveStakers: getActiveStakers.activeStakers.length,
      percentOfLockedNu: percentOfLockedNu,
      lockedNu: lockedNu,
      network: network,
      nuNitsToWithdraw: nuNitsToWithdraw,
      buttonStatus: "ok"
    });

    // console.log(instanceEscrow.methods);
    // console.log(getStakersLength);

    // console.log(instancePolicy.methods);
    // console.log(allUserNu);
    // console.log(lockedUserNu);
    // console.log(nuToWithdraw);
    // console.log(nodes);
    // console.log(instanceWorklock.methods)

    // console.log(getActiveStakers.activeStakers.length);
    // console.log(
    //   (parseFloat(getActiveStakers[0]) / 10 ** 18).toLocaleString("en-Us")
    // );

    // console.log();
  }

  // componentWillUnmount() {
  //   this.getBlockChainData();
  // }

  render() {
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
              <Redirect to="/worklock" />
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
            ><Redirect to="/worklock" /></Route>
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
