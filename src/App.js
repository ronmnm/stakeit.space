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
   handleAmountState(amount){
      this.setState({amount: amount})
   }
   handleDurationState(duration){
      this.setState({duration: duration})
   }

   async componentDidMount() {
      this.metamaskChecking();
   }

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

      let manageComponent = <MainSpinner />;
      if (buttonStatus === "install") {
         manageComponent = <div> install metamask</div>;
      } else if (buttonStatus === "connect") {
         manageComponent = <div>Connect a wallet</div>;
      } else if (manageData) {
         manageComponent = (
            <Manage
               manageData={manageData}
               setters={this.state.setters}
               setWinddown={this.state.setWinddown}
            />
         );
      }

      let worklockComponent = <MainSpinner />;
      if (worklockData) {
         worklockComponent = <Worklock worklockData={worklockData} />;
      }

      let account;
      if (stakeData) {
         account = stakeData.account;
      }

      // console.log(window.ethereum.networkVersion);

      // worklockData ? console.log(worklockData.methods) : console.log("hi");

      return (
         <BrowserRouter>
            <div className="my_wrapper">
               <Header
                  account={account}
                  isConnected={isConnected}
                  network={this.state.network}
                  buttonStatus={buttonStatus}
                  onClick={this.handleClick}
                  // account={this.stakeData.account}
               />

               <div className="my_content_wrapper">
                  {/* STAKE Component */}
                  <Route path="/" exact>
                     <Redirect to="/worklock" />
                  </Route>
                  <Route
                     path="/stake"
                     render={() => (
                        <Stake
                           stakeData={stakeData}
                           account={account}
                           amount={this.state.amount}
                           duration={this.state.duration}
                           handleDurationState={this.handleDurationState}
                           handleAmount={this.handleAmountState} />
                     )}
                  />
                  {/* END STAKE Component */}

                  {/* MANAGE Component */}
                  <Route path="/manage" render={() => manageComponent} />
                  {/* END MANAGE Component */}

                  {/* WITHDRAW Component */}
                  <Route path="/withdraw" render={() => <Withdraw />} />
                  {/* END WITHDRAW Component */}

                  {/* WORKLOCK Component */}
                  <Route path="/worklock" render={() => worklockComponent} />
                  {/* END WORKLOCK Component */}
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
