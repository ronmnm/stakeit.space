import React from 'react';
import ReactGA from 'react-ga';
import { Router, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { connect } from 'react-redux';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import StakeContainer from './components/stake/StakeContainer';
import Manage from './components/manage/Manage';
import Worklock from './components/worklock/worklock';
// import Rewards from './components/rewards/rewards';

import { store } from './redux/store';
import { setAccount, setStatusThunk, getDataThunk, setManageData, setWorklockData } from './redux/reducers';
import { LOADING, OK, WRONG, CONNECT, INSTALL } from './redux/reducers';

const history = createBrowserHistory();
const stakeit = 'UA-162529903-1';
const test = 'UA-162797521-1';
const ethereum = window.ethereum;

ReactGA.initialize(stakeit);

history.listen(location => {
   ReactGA.set({ page: location.pathname }); // Update the user's current page
   ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

class App extends React.Component {
   constructor(props) {
      super(props);
      // this.handleClick = this.handleConnectClick.bind(this);
      this.setState = this.setState.bind(this);
      // this.handleAmountState = this.handleAmountState.bind(this);
      // this.handleDurationState = this.handleDurationState.bind(this);
      // this.metamaskChecking = this.metamaskChecking.bind(this);
   }
   state = {
      setters: null,
      address: null,
      approveAndCall: null,
      amount: null,
      duration: null,
   };

   componentDidMount() {
      this.metamaskChecking();
   }
   handleAmountState = amount => {
      this.setState({ amount: amount });
   };
   handleDurationState = duration => {
      this.setState({ duration: duration });
   };

   metamaskChecking = () => {
      if (typeof window.ethereum !== 'undefined') {
         const ethereum = window.ethereum;
         if (ethereum.selectedAddress !== null || this.props.account !== '') {
            if (ethereum.networkVersion === '5' || ethereum.networkVersion === undefined) {
               this.props.getDataThunk();
               ethereum.on('accountsChanged', () => {
                  store.dispatch(setManageData({}, true))
                  store.dispatch(setWorklockData({}, true))
                  this.props.setStatusThunk(LOADING)
                  this.props.getDataThunk();
               });
            } else {
               this.props.setStatusThunk(WRONG);
            }
         } else {
            this.props.setStatusThunk(CONNECT, this.handleConnectClick);
         }
      } else {
         this.props.setStatusThunk(INSTALL);
      }
   };

   handleConnectClick = async () => {
      this.props.setStatusThunk(LOADING);
      try {
         await ethereum.enable().then(obj => {
            this.metamaskChecking();
            console.log('inside try');
         });
         console.log('out of try');
      } catch (error) {
         this.props.setStatusThunk(CONNECT, this.handleConnectClick);
      }
   };

   render() {
      return (
         <Router history={history}>
            <div className="my_wrapper">
               <Header />

               <div className="my_content_wrapper">
                  <Route path="/" exact>
                     <Redirect to="/stake" />
                  </Route>

                  <Route
                     path="/stake"
                     render={() => (
                        <StakeContainer
                           // stakeData={stakeData}
                           // account={account}
                           amount={this.state.amount}
                           duration={this.state.duration}
                           handleDuration={this.handleDurationState}
                           handleAmount={this.handleAmountState}
                        />
                     )}
                  />

                  <Route path="/manage" render={() => <Manage />} />

                  {/* <Route path="/rewards" render={() => rewards} /> */}

                  <Route path="/worklock" render={() => <Worklock />} />
               </div>

               <Footer />
            </div>
         </Router>
      );
   }
}

const mapStateToProps = ({ user }) => ({
   account: user.account,
});

export default connect(mapStateToProps, { setStatusThunk, getDataThunk })(App);
