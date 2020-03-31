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
// import Web3 from "web3";
// import { instanceWorklock } from "../../ethereum/instances/worklock";

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

  render() {
    // console.log(web3.utils.toWei(this.state.inputAmount, "ether"));
    return (
      <div className="worklock_wrapper">
        
        <div className="worklock_timeline">
          <h3>TIMELINE</h3>
          <div className="timeline_container">
            <div>
              <h4>Bidding Start Date</h4>
              <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
            </div>
            <div>
              <h4>Bidding Start Date</h4>
              <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
            </div>
            <div>
              <h4>Bidding Start Date</h4>
              <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
            </div>
            <div>
              <h4>Bidding Start Date</h4>
              <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
            </div>
          </div>
        </div>

        <div className="worklock_economics">


          <div className="worklock_timeline">
            <h3>ECONOMICS</h3>
            <div className="timeline_container">
              <div>
                <h4>Bidding Start Date</h4>
                <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
              </div>
              <div>
                <h4>Bidding Start Date</h4>
                <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
              </div>
              <div>
                <h4>Bidding Start Date</h4>
                <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
              </div>
              <div>
                <h4>Bidding Start Date</h4>
                <span>Wed, 25 Mar 2020 00:00:00 GMT</span>
              </div>
            </div>
          </div>


        </div>
        <div className="worklock_participant">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio tempora
          corporis, molestias adipisci voluptates repudiandae reprehenderit
          ipsam pariatur quos iusto facere neque aliquam sint inventore,
          excepturi ipsa, harum aperiam rerum?
        </div>
      </div>
    );
    // <div>
    //   <div className="worklock_wrapper">
    //     <div className="work_lock_left">
    //       <p>
    //         Starting bid date <span>{this.state.startBidDateHuman}</span>
    //       </p>
    //       <p>
    //         Cancellation Window End Date{" "}
    //         <span>{this.state.endCancellationDateHuman}</span>
    //       </p>
    //       <p>
    //         Bidders: <span>{this.state.getBiddersLength}</span>
    //       </p>
    //       <p>
    //         ETH Pool: <span>{this.state.worklockBalETH} ETH</span>
    //       </p>
    //     </div>

    //     <div className="work_lock_right">
    //       <p>
    //         Ending bid date <span>{this.state.endBidDateHuman}</span>
    //       </p>
    //       <p>
    //         Cancellation Time Remaining{" "}
    //         <span>{this.state.remainingCancelationTimeHuman}</span>
    //       </p>
    //       <p>
    //         Is claiming phase open
    //         <span>{this.state.isClaimingAvailableHuman}</span>
    //       </p>
    //       <p>
    //         Min allowed bid
    //         <span>{this.state.minAllowedBidETH} ETH</span>
    //       </p>
    //     </div>
    //   </div>
    //   <div className="worklock_button_wrappe">
    //     <span className="participant">
    //       <i>
    //         WorkLock Participant:{" "}
    //         <b style={{ fontSize: "14px", color: "#ddd" }}>
    //           {this.state.address}
    //         </b>
    //       </i>
    //       <p>
    //         Current bid:{" "}
    //         <b style={{ fontSize: "26px", color: "#ddd" }}>
    //           {this.state.currentBid}
    //         </b>{" "}
    //         ETH
    //       </p>
    //       <Button size="xs" appearance="ghost" onClick={this.cancelBid}>
    //         Cancel Bid
    //       </Button>
    //     </span>

    {
      /* <form onSubmit={this.makeBid} className="worklock_bid_form">
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
          </form> */
    }
    //       <Form>
    //         <FormGroup>
    //           <ControlLabel>Ented ETH amount:</ControlLabel>
    //           <FormControl
    //             name="name"
    //             onChange={value => this.setState({ inputAmount: value })}
    //             autoComplete="off"
    //           />
    //         </FormGroup>
    //         <FormGroup>
    //           <ButtonToolbar>
    //             <Button appearance="primary" onClick={this.makeBid}>
    //               Place Bid!
    //             </Button>
    //           </ButtonToolbar>
    //         </FormGroup>
    //       </Form>
    //     </div>
    //   </div>
    // );
  }
}
