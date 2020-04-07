import React from "react";
import ReactGA from "react-ga";
import { Router, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Stake from "./components/stake/Stake";
import Manage from "./components/manage/Manage";
import Worklock from "./components/worklock/worklock";
import Rewards from "./components/rewards/rewards";
import FooterLoader from "./components/loader/footer-loader";
import MainSpinner from "./components/loader/main-spinner";

import ServiceWeb3 from "./services/web3-service";
import ServiceWeb3Setters from "./services/web3-service-setters";
import WorklockService from "./services/worklock-service";

const history = createBrowserHistory();
const stakeit = "UA-162529903-1";
// const test = "UA-162797521-1";

ReactGA.initialize(stakeit);

history.listen(location => {
   ReactGA.set({ page: location.pathname }); // Update the user's current page
   ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const serviceWeb3 = new ServiceWeb3();
const serviceSetters = new ServiceWeb3Setters();
const worklockService = new WorklockService();

class App extends React.Component {
   constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.setState = this.setState.bind(this);
      this.handleAmountState = this.handleAmountState.bind(this);
      this.handleDurationState = this.handleDurationState.bind(this);
   }
   state = {
      manageData: null,
      stakeData: null,
      footerData: null,
      withdrawData: null, /////
      setters: null,
      worklockData: null,
      buttonStatus: "loading",
      footerStatus: "loading",
      isConnected: false,
      address: null,
      approveAndCall: null,
      amount: null,
      duration: null
   };
   handleAmountState(amount) {
      this.setState({ amount: amount });
   }
   handleDurationState(duration) {
      this.setState({ duration: duration });
   }

   async componentDidMount() {
      this.metamaskChecking();
   }
   componentDidUpdate() {}

   metamaskChecking() {
      if (typeof window.ethereum !== "undefined") {
         if (
            window.ethereum.networkVersion === "5" ||
            window.ethereum.networkVersion === undefined
         ) {
            if (
               window.ethereum.selectedAddress !== null ||
               this.state.address !== null
            ) {
               serviceWeb3.getStakerBalAddr().then(res => {
                  this.setState({
                     stakeData: res,
                     buttonStatus: "ok"
                  });
               });
               serviceWeb3
                  .getFooterData()
                  .then(res =>
                     this.setState({ footerData: res, footerStatus: "done" })
                  );
               serviceWeb3.getManageData().then(res => {
                  this.setState({ manageData: res });
               });
               serviceSetters
                  .getSetters()
                  .then(res => this.setState({ setters: res }));
               worklockService
                  .getWorklockData()
                  .then(res => this.setState({ worklockData: res }));
            } else {
               this.setState({ buttonStatus: "connect" });
            }
         } else {
            this.setState({ buttonStatus: "wrong" });
         }
      } else {
         this.setState({ buttonStatus: "install" });
      }
   }

   async handleClick() {
      this.setState({ buttonStatus: "loading" });
      try {
         await window.ethereum.enable().then(ob => {
            console.log(ob);
            this.setState({ address: ob[0] });
         });
         this.metamaskChecking();
      } catch (error) {
         this.setState({ buttonStatus: "connect" });
         console.log("user denied");
      }
   }

   render() {
      const {
         buttonStatus,
         isConnected,
         // objects
         stakeData,
         manageData,
         footerData,
         footerStatus,
         worklockData
      } = this.state;

      let manage = <MainSpinner />;
      if (buttonStatus === "install") {
         manage = <div> install metamask</div>;
      } else if (buttonStatus === "connect") {
         manage = <div>Connect a wallet</div>;
      } else if (manageData) {
         manage = (
            <Manage
               manageData={manageData}
               setters={this.state.setters}
               setWinddown={this.state.setWinddown}
            />
         );
      }

      let worklock = <MainSpinner />;
      if (worklockData) {
         worklock = <Worklock worklockData={worklockData} />;
      }

      let account;
      if (stakeData) {
         account = stakeData.account;
      }

      const stake = (
         <Stake
            stakeData={stakeData}
            account={account}
            amount={this.state.amount}
            duration={this.state.duration}
            handleDurationState={this.handleDurationState}
            handleAmount={this.handleAmountState}
         />
      );
      const rewards = (
         <Rewards
            fee={
               this.state.stakerData
                  ? this.state.stakerData.policyFee
                  : "Loading"
            }
            nu={
               this.state.manageData
                  ? this.state.manageData.stakerNuUnlocked.toFixed(3)
                  : "Loading"
            }
            eth={
               this.state.worklockData
                  ? this.state.worklockData.аvailableRefund
                  : "Loading"
            }
         />
      );
      const footer = <Footer footerData={footerData} />;

      return (
         <Router history={history}>
            <div className="my_wrapper">
               <Header
                  account={account}
                  isConnected={isConnected}
                  network={this.state.network}
                  buttonStatus={buttonStatus}
                  onClick={this.handleClick}
               />

               <div className="my_content_wrapper">
                  <Route path="/" exact>
                     <Redirect to="/stake" />
                  </Route>

                  <Route path="/stake" render={() => stake} />

                  <Route path="/manage" render={() => manage} />

                  <Route path="/rewards" render={() => rewards} />

                  <Route path="/worklock" render={() => worklock} />
               </div>

               {footerStatus === "loading" ? <FooterLoader /> : footer}
            </div>
         </Router>
      );
   }
}

export default App;
