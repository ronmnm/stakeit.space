import React from "react";
import {
  Button,
  FormGroup,
  ButtonToolbar,
  Form,
  ControlLabel,
  FormControl
} from "rsuite";
// import "rsuite/dist/styles/rsuite-dark.css";
import "./worklock.css";
import Web3 from "web3";
import { instanceWorklock } from "../../ethereum/instances/worklock";
const web3 = new Web3(window.ethereum);

export default class Worklock extends React.Component {
  state = {
    address: null,
    getBiddersLength: "0",
    startBidDateHuman: "0",
    endBidDateHuman: "0",
    isClaimingAvailableHuman: "?",
    worklockBalETH: "0",
    minAllowedBidETH: "0",
    inputAmount: null,
    currentBid: "0",
    endCancellationDateHuman: "0",
    remainingCancelationTimeHuman: "0"
  };

  async componentDidMount() {
    const accounts = await web3.eth.getAccounts();
    const address = accounts[0];
    const getBiddersLength = await instanceWorklock.methods
      .getBiddersLength()
      .call();
    //start bid date
    const startBidDate = await instanceWorklock.methods.startBidDate().call();
    const startBidDateHuman = new Date(startBidDate * 1000).toUTCString();
    //end bid date
    const endBidDate = await instanceWorklock.methods.endBidDate().call();
    const endBidDateHuman = new Date(endBidDate * 1000).toUTCString();
    // cancel bin date
    const endCancellationDate = await instanceWorklock.methods
      .endCancellationDate()
      .call();
    const endCancellationDateHuman = new Date(
      endCancellationDate * 1000
    ).toUTCString();
    const currentDateUnix = Date.now();
    const remainingCancelationTime =
      endCancellationDate * 1000 - currentDateUnix;

    function convertMS(milliseconds) {
      var day, hour, minute, seconds;
      seconds = Math.floor(milliseconds / 1000);
      minute = Math.floor(seconds / 60);
      seconds = seconds % 60;
      hour = Math.floor(minute / 60);
      minute = minute % 60;
      day = Math.floor(hour / 24);
      hour = hour % 24;
      return {
        day: day,
        hour: hour,
        minute: minute,
        seconds: seconds
      };
    }
    const dateObj = convertMS(remainingCancelationTime);
    const remainingCancelationTimeHuman = `${dateObj.day} days, ${dateObj.hour} hours, ${dateObj.minute} minutes`;
    // console.log(remainingCancelationTimeHuman);

    // const humanDateFormat = dateObject.toLocaleString()
    const isClaimingAvailable = await instanceWorklock.methods
      .isClaimingAvailable()
      .call();
    //getting balance
    const worklockBal = await web3.eth.getBalance(
      instanceWorklock.options.address
    );
    const worklockBalETH = parseFloat(
      web3.utils.fromWei(worklockBal, "ether")
    ).toFixed(2);
    // min allowed bid minAllowedBid
    const minAllowedBid = await instanceWorklock.methods.minAllowedBid().call();
    const minAllowedBidETH = parseFloat(
      web3.utils.fromWei(minAllowedBid, "ether")
    ).toFixed(2);

    const getRemainingWork = await instanceWorklock.methods
      .getRemainingWork(address)
      .call();
    // get current bid
    const workInfo = await instanceWorklock.methods.workInfo(address).call();
    const currentBid = web3.utils.fromWei(workInfo[0], "ether");
    // console.log(instanceWorklock.methods);
    // console.log(getRemainingWork);
    // console.log(workInfo2);

    let isClaimingAvailableHuman;
    if (isClaimingAvailable) {
      isClaimingAvailableHuman = "Yes";
    } else {
      isClaimingAvailableHuman = "No";
    }

    // console.log(instanceWorklock.methods);
    // console.log(isClaimingAvailable);
    this.setState({
      address,
      getBiddersLength,
      startBidDateHuman,
      endBidDateHuman,
      isClaimingAvailableHuman,
      worklockBalETH,
      minAllowedBidETH,
      currentBid,
      endCancellationDateHuman,
      remainingCancelationTimeHuman
    });
  }

  makeBid = async e => {
    e.preventDefault();
    console.log("blabla");
    const accounts = await web3.eth.getAccounts();
    console.log(this.state.inputAmount);
    const toNum = +this.state.inputAmount;

    await instanceWorklock.methods.bid().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.inputAmount, "ether")
    });
  };

  cancelBid = async e => {
    e.preventDefault();
    const accounts = await web3.eth.getAccounts();
    await instanceWorklock.methods.cancelBid().send({
      from: accounts[0]
    });
  };

  render() {
    // console.log(web3.utils.toWei(this.state.inputAmount, "ether"));
    return (
      <div>
        <div className="worklock_wrapper">
          <div className="work_lock_left">
            <p>
              Starting bid date <span>{this.state.startBidDateHuman}</span>
            </p>
            <p>
              Cancellation Window End Date{" "}
              <span>{this.state.endCancellationDateHuman}</span>
            </p>
            <p>
              Bidders: <span>{this.state.getBiddersLength}</span>
            </p>
            <p>
              ETH Pool: <span>{this.state.worklockBalETH} ETH</span>
            </p>
          </div>

          <div className="work_lock_right">
            <p>
              Ending bid date <span>{this.state.endBidDateHuman}</span>
            </p>
            <p>
              Cancellation Time Remaining{" "}
              <span>{this.state.remainingCancelationTimeHuman}</span>
            </p>
            <p>
              Is claiming phase open
              <span>{this.state.isClaimingAvailableHuman}</span>
            </p>
            <p>
              Min allowed bid
              <span>{this.state.minAllowedBidETH} ETH</span>
            </p>
          </div>
        </div>
        <div className="worklock_button_wrappe">
          <span className="participant">
            <i>
              WorkLock Participant:{" "}
              <b style={{ fontSize: "14px", color: "#ddd" }}>
                {this.state.address}
              </b>
            </i>
            <p>
              Current bid:{" "}
              <b style={{ fontSize: "26px", color: "#ddd" }}>
                {this.state.currentBid}
              </b>{" "}
              ETH
            </p>
            <Button size="xs" appearance="ghost" onClick={this.cancelBid}>
              Cancel Bid
            </Button>
          </span>

          {/* <form onSubmit={this.makeBid} className="worklock_bid_form">
            <input
              onChange={event =>
                this.setState({ inputAmount: event.target.value })
              }
              placeholder="ETH"
              className="my_worklock_input"
              autoComplete="off"
              type="text"
              name="name"
              required
            />
            <button className="worklock_button">Bid!</button>
            <Button>Hello</Button>
          </form> */}
          <Form>
            <FormGroup>
              <ControlLabel>Ented ETH amount:</ControlLabel>
              <FormControl
                name="name"
                onChange={value => this.setState({ inputAmount: value })}
                autoComplete="off"
              />
            </FormGroup>
            <FormGroup>
              <ButtonToolbar>
                <Button appearance="primary" onClick={this.makeBid}>
                  Place Bid!
                </Button>
              </ButtonToolbar>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}
