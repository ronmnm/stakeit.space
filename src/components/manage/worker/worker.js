import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import utils from "web3-utils";
import ReactGA from "react-ga";
import s from "./worker.module.css";
import Icon from "../link-icon/link-icon";
import Modal from "../../worklock/modal/modal";
import { ControlButton } from "../manage-bottom/substakes/substakes";
import RoundSpinner from "../../loader/7.svg";

const WorkerButton = styled.span`
   background-color: #404040;
   padding: 0 24px;
   height: 100%;
   display: block;
   justify-self: flex-end;
   font-size: 13px;
   border-radius: 8px;
   text-align: center;
   font-weight: 500;
   transition: 0.2s;
   color: #cccccc;
   :hover {
      cursor: pointer;
      background-color: #4b4b4b;
      color: #ffffff;
   }
   :active {
      background-color: #444444;
   }
`;
export const ModalContent = styled.div`
   display: grid;
   grid-template-rows: 1fr 4fr;
   grid-auto-columns: 1fr;
   justify-content: center;
   height: 100%;
   padding: 15px 18px;
   text-align: center;
   span {
      background-color: #777;
      border-radius: 10px;
      height: 50px;
      width: 100%;
      line-height: 50px;
      box-shadow: 0 10px 31px #282828;
      color: white;
      text-transform: uppercase;
      letter-spacing: 0.4px;
      font-size: 15px;
      font-weight: 600;
   }
   b {
      margin-bottom: 30px;
      margin-top: 30px;
      display: block;
      font-weight: 500;
      color: #c5c5c5;
   }
   label {
      color: #c5c5c5;
      margin-bottom: 7px;
      display: block;
      font-size: 12px;
   }
   input {
      width: 100%;
      justify-self: center;
      height: 40px;
      background-color: #4b4b4b;
      text-align: center;
      border: none;
      border-radius: 5px;
      font-size: 15px;
      color: white;
      margin-bottom: 60px;
      letter-spacing: 0.4px;
      font-family: Lato, sans-serif;
      border: 1px solid ${({ isValid }) => (isValid ? "#4b4b4b" : "tomato")};
      &:focus {
         outline: none;
      }
      &::placeholder {
         color: #999;
      }
      &:focus::placeholder {
         opacity: 0;
      }
   }
   input[type="number"]::-webkit-inner-spin-button,
   input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
   input[type="number"] {
      -moz-appearance: textfield;
   }
   .button_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
   }
`;

const Worker = ({ worker, workerEthBal, setWorker, confirmedPeriod1 }) => {
   const [inputAddress, setInputAddress] = useState("");
   const [isValid, setIsValid] = useState(true);
   const [isLoading, setIsLoading] = useState(false);

   let workerAddress;
   let buttonContent;
   if (worker === "0x0000000000000000000000000000000000000000") {
      workerAddress = <React.Fragment>Worker not set</React.Fragment>;
      buttonContent = "Set worker";
   } else {
      workerAddress = `${worker.slice(0, 6)}...${worker.slice(38, 42)}`;
      buttonContent = "Change worker";
   }

   useEffect(() => {
      if (inputAddress !== "") {
         setIsValid(utils.isAddress(inputAddress));
      } else {
         setIsValid(true);
      }
   });

   const modalRef = useRef();

   const openModal = (e) => {
      e.preventDefault();
      modalRef.current.openMod();
   };
   const closeModal = () => {
      modalRef.current.closeMod();
      setInputAddress("");
      setIsValid(true);
   };

   const handleClick = async () => {
      setIsLoading(true);
      ReactGA.event({
         category: "Manage tab",
         action: "Open Set Worker Modal",
         label: "manage_tab_label"
      });
      await setWorker(inputAddress)
         .then(() => setIsLoading(false))
         .catch(() => setIsLoading(false));
      setInputAddress("");
   };

   return (
      <div className="worker_manage">
         <h4 className={s.address_title}>Worker Account</h4>
         <h2 className={s.address_eth}>
            {workerAddress}
            <Icon address={worker} />
            <WorkerButton onClick={openModal}>{buttonContent}</WorkerButton>
         </h2>

         <div className="worker_content">
            <p>
               Ether Balance:
               <span>
                  <b>{workerEthBal}</b> ETH
               </span>
            </p>
            <p>
               Activity:
               <span>
                  <b>{confirmedPeriod1}</b>
               </span>
            </p>
         </div>

         <div>
            <Modal ref={modalRef}>
               <ModalContent isValid={isValid}>
                  <span>Bond a worker to a staker</span>
                  <div>
                     {/* <b>Bond a worker to a staker</b> */}
                     <b>
                        Note: The Worker cannot be changed for a minimum of 2
                        periods once set.
                     </b>
                     <label htmlFor="">Enter ETH address:</label>
                     <input
                        placeholder="0x..."
                        value={inputAddress}
                        onChange={(e) => setInputAddress(e.target.value)}
                     />
                  </div>
                  <div className="button_wrapper">
                     <ControlButton
                        onClick={closeModal}
                        background="#444"
                        background_hover="#484848">
                        Cancel
                     </ControlButton>
                     <ControlButton
                        blue
                        onClick={handleClick}
                        background="#0077ff"
                        background_hover="#1683ff">
                        {isLoading ? (
                           <img
                              style={{ marginTop: "10px" }}
                              src={RoundSpinner}
                              alt="React Logo"
                           />
                        ) : (
                           "Confirm"
                        )}
                     </ControlButton>
                  </div>
               </ModalContent>
            </Modal>
         </div>
      </div>
   );
};

export default Worker;

// class ChangeWorkerField extends React.Component {
//    constructor(props) {
//       super(props);
//       this.state = {
//          address: "",
//       };

//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//    }

//    handleChange(event) {
//       this.setState({ address: event.target.value });
//    }

//    handleSubmit(event) {
//       event.preventDefault();
//       this.props.setWorker(this.state.address);
//    }

//    render() {
//       return (
//          <div>
//             <p>Set New Worker</p>

//             <form onSubmit={this.handleSubmit} className={s.worker_buttons}>
//                <button className={s.change_wrkr_button}>Confirm</button>
//                <input
//                   placeholder="Enter new ETH address"
//                   className={s.change_wrkr_input}
//                   type="text"
//                   value={this.state.address}
//                   onChange={this.handleChange}
//                />
//             </form>
//          </div>
//       );
//    }
// }
