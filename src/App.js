import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Stake from "./components/stake/Stake";
import Manage from "./components/manage/Manage";
import Withdraw from "./components/withdraw/Withdraw";
import "./App.css";
import Web3 from "web3";

class App extends React.Component {
  state = {
    address: ""
  };

  async componentDidMount() {
     const web3 = new Web3(window.ethereum)
     const accounts = await web3.eth.getAccounts()

     this.setState({address: accounts[0]})
  }

  render() {
    return (
      <BrowserRouter>
        <Header address={this.state.address} />
        <div className="my_content_wrapper">
          <Route path="/stake" component={() => <Stake isAuthed={this.state.address} />} />
          <Route path="/manage" component={Manage} />
          <Route path="/withdraw" component={Withdraw} />
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
