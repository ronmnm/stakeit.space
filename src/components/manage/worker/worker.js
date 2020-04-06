import React from "react";
import ReactGA from "react-ga";
import s from "./worker.module.css";

const Worker = ({ workerAddress, workerEthBal, setWorker }) => {
   return (
      <div className="worker_manage">
         <h4 className={s.address_title}>Worker Account</h4>
         <h2 className={s.address_eth}>{workerAddress}</h2>

         <div className="worker_content">
            <p>
               Ether Balance:{" "}
               <span>
                  <b>{workerEthBal}</b> ETH
               </span>
            </p>
         </div>

         <div>
            {/* <div className="btn-group">
            <p>Detach Worker</p>
            <button>Detach</button>
          </div> */}
            <ChangeWorkerField setWorker={setWorker} />
         </div>
      </div>
   );
};

export default Worker;




class ChangeWorkerField extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         address: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleChange(event) {
      this.setState({ address: event.target.value });
   }

   handleSubmit(event) {
      event.preventDefault();
      this.props.setWorker(this.state.address);
   }

   render() {
      return (
         <div>
            <p>Set New Worker</p>

            <form onSubmit={this.handleSubmit} className={s.worker_buttons}>
               <button className={s.change_wrkr_button}>Confirm</button>
               <input
                  placeholder="Enter new ETH address"
                  className={s.change_wrkr_input}
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange}
               />
            </form>
         </div>
      );
   }
}
