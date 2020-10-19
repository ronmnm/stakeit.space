import React, {useEffect, useState} from 'react';
import {Redirect, Route, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {connect} from 'react-redux';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import StakeContainer from './components/stake/StakeContainer';
import Manage from './components/manage/Manage';
import Worklock from './components/worklock/worklock';

import {store} from './redux/store';
import {getDataThunk, setManageData, setStatusThunk, setWorklockData} from './redux/reducers';
import * as t from './redux/actionTypes';

const history = createBrowserHistory();
const ethereum = window.ethereum;

const App = props => {
   const [amount, setAmount] = useState(null);
   const [duration, setDuration] = useState(null);

   useEffect(() => {
      metamaskChecking();
   });

   const handleAmountState = amount => setAmount(amount);
   const handleDurationState = duration => setDuration(duration);

   const metamaskChecking = (address = null) => {
      if (typeof window.ethereum !== 'undefined') {
         const ethereum = window.ethereum;
         if (ethereum.selectedAddress !== null || address) {
            if (ethereum.networkVersion === '4' || ethereum.networkVersion === undefined) {
               props.getDataThunk();
               ethereum.on('accountsChanged', () => {
                  metamaskChecking();
                  store.dispatch(setWorklockData({}, true));
                  store.dispatch(setManageData({}, true));
               });
            } else {
               props.setStatusThunk(t.WRONG);
            }
         } else {
            props.setStatusThunk(t.CONNECT, handleConnectClick);
         }
      } else {
         props.setStatusThunk(t.INSTALL);
      }
   };

   const handleConnectClick = () => {
      ethereum.enable()
         .then(ob => metamaskChecking(ob[0]))
         .catch(err => console.error(err.message));
   };

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
                        amount={amount}
                        duration={duration}
                        handleDuration={handleDurationState}
                        handleAmount={handleAmountState}
                     />
                  )}
               />
               <Route path="/manage" render={() => <Manage />} />
               <Route path="/worklock" render={() => <Worklock />} />
            </div>

            <Footer />
         </div>
      </Router>
   );
};

const mapStateToProps = ({ user }) => ({
   account: user.account,
});

export default connect(mapStateToProps, { setStatusThunk, getDataThunk })(App);
