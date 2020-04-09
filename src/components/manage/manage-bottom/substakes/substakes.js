import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import NoStakes from "./no-stakes/no-stakes";
import Modal from "../../../worklock/modal/modal";
import RoundSpinner from "../../../loader/7.svg";

const Button = styled.div`
   color: #ddd;
   background-color: #444;
   text-align: center;
   line-height: 30px;
   height: 30px;
   border-radius: 8px;
   border: none;
   transition: 0.2s;
   font-family: "Lato", sans-serif;
   &:hover {
      cursor: pointer;
      background-color: #505050;
      color: white;
      box-shadow: 0 5px 15px #222;
   }
   &:active {
      background-color: #454545;
   }
`;

const ModalContent = styled.div`
   display: grid;
   grid-template-rows: 1fr 4fr;
   grid-auto-columns: 1fr;
   justify-content: center;
   height: 100%;
   padding: 15px 18px;
   text-align: center;
   span {
      background-color: ${(props) => (props.prolong ? "#594ab6" : "darkgreen")};
      border-radius: 10px;
      height: 50px;
      width: 100%;
      line-height: 50px;
      box-shadow: 0 10px 31px #282828;
      color: ${(props) => (props.prolong ? "#cdccf1" : "#c7ebc7")};
      text-transform: uppercase;
      letter-spacing: 0.4px;
      font-size: 15px;
      font-weight: 600;
   }
   b {
      margin-bottom: 30px;
      margin-top: 20px;
      display: block;
      font-weight: 500;
      color: #c5c5c5;
   }
`;

const ProlongControls = styled.div`
   display: grid;
   label {
      margin-bottom: 5px;
      font-size: 12px;
      color: #d7d7d7;
   }
   input {
      width: 50%;
      justify-self: center;
      height: 40px;
      background-color: #4b4b4b;
      text-align: center;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      color: white;
      margin-bottom: 79px;
      letter-spacing: 0.8px;
      font-family: Lato, sans-serif;
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
   div {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr 1fr;
      column-gap: 20px;
   }
`;

const DivideControls = styled.form`
   display: grid;
   grid-template-rows: 143px 1fr;
   grid-template-columns: 1.9fr 1fr;
   column-gap: 20px;
   p{
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding-left: 5px;
      padding-top: 5px;
      color: grey;
   }
   div:last-child {
      grid-column-start: 1;
      grid-column-end: 3;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 20px;
   }
   label {
      margin-bottom: 5px;
      font-size: 12px;
      color: #d7d7d7;
      display: block;
   }
   input {
      width: 100%;
      justify-self: center;
      height: 40px;
      background-color: #4b4b4b;
      text-align: center;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      color: white;
      margin-bottom: 10px;
      letter-spacing: 0.8px;
      font-family: Lato, sans-serif;
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
   div {
   }
`;

export const ControlButton = styled.button`
   background-color: ${(props) => props.background};
   color: ${(props) => (props.blue ? "#fff" : "lightgrey")};
   height: 40px;
   width: 100%;
   line-height: 40px;
   font-size: 14px;
   border: none;
   border-radius: 8px;
   cursor: pointer;
   transition: 0.2s;
   font-family: Lato, sans-serif;
   &:hover {
      background-color: ${(props) => props.background_hover};
   }
   &:focus {
      outline: none;
   }
`;

const Substakes = ({ substakeList, prolongStake, divideStake }) => {
   const [id, setId] = useState(null);
   const [prolongValue, setProlongValue] = useState("");
   const [newStakeValue, setNewStakeValue] = useState("");
   const [newStakeExtendValue, setNewStakeExtendValue] = useState("");
   const [currentStake, setCurrentStake] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      window.scrollTo(0, window.pageYOffset);
   }, []);

   const modalRef1 = useRef();
   const modalRef2 = useRef();

   const openModal1 = (id) => {
      setId(id);
      modalRef1.current.openMod();
   };
   const openModal2 = (id, lockedValue) => {
      setId(id);
      setCurrentStake((lockedValue / 10**18).toFixed(0))
      modalRef2.current.openMod();
   };
   const closeModal = () => {
      setProlongValue("");
      modalRef1.current.closeMod();
   };
   const closeModal2 = () => {
      setProlongValue("");
      modalRef2.current.closeMod();
   };

   const prolongConfirmClick = async () => {
      setIsLoading(true);
      await prolongStake(id, prolongValue)
         .then(() => setIsLoading(false))
         .catch(() => setIsLoading(false));
      setProlongValue("");
   };
   const divideConfirmClick = async (e) => {
      e.preventDefault()
      setIsLoading(true);
      await divideStake(id, newStakeValue, newStakeExtendValue)
         .then(() => setIsLoading(false))
         .catch(() => setIsLoading(false));
      setNewStakeValue("");
      setNewStakeExtendValue("");
   };

   let substake_item;

   if (substakeList !== null) {
      substake_item = substakeList.map((obj) => {
         const value = (obj.lockedValue / 10 ** 18).toLocaleString("en-Us");
         const startDay = new Date(obj.firstPeriod * 86400000)
            .toUTCString()
            .slice(0, 11);
         const startYear = new Date(obj.firstPeriod * 86400000)
            .toDateString()
            .slice(-4);
         const currentDate = Date.now() / 86400000;
         const endDay = new Date((currentDate + +obj.periods + 1) * 86400000)
            .toUTCString()
            .slice(0, 11);
         const endYear = new Date((currentDate + +obj.periods) * 86400000)
            .toDateString()
            .slice(-4);

         return (
            <div key={obj.id} className="substake_and_prdvd">
               <div className="substake_item">
                  <div>
                     <span className="top_text">№ {obj.id}</span>
                     <span className="bottom_text">STAKE</span>
                  </div>
                  <div>
                     <span className="top_text">{value}</span>
                     <span className="bottom_text">NU</span>
                  </div>
                  <div>
                     <span className="top_text">{obj.periods}</span>
                     <span className="bottom_text">DAYS</span>
                  </div>
                  <div>
                     <span className="top_text">{startDay}</span>
                     <span className="bottom_text">{startYear}</span>
                  </div>
                  <div>
                     <span className="top_text">{endDay}</span>
                     <span className="bottom_text">{endYear}</span>
                  </div>
               </div>
               <div className="prolong_devide">
                  <Button onClick={() => openModal1(obj.id)}>Prolong</Button>
                  <Button onClick={() => openModal2(obj.id, obj.lockedValue)}>Devide</Button>
               </div>
            </div>
         );
      });
   } else {
      return (substake_item = <NoStakes />);
   }

   return (
      <div>
         <div className="substake_items_titles">
            <div>
               <span>Substake</span>
               <span>Amount</span>
               <span>Duration</span>
               <span>Created</span>
               <span>Ends</span>
            </div>
            <span>Modify</span>
         </div>
         <div className="list_items">{substake_item}</div>
         <Modal ref={modalRef1}>
            <ModalContent prolong>
               <span>Prolong substake № {id}</span>
               <div>
                  <b>Prolong an existing stake’s duration</b>
                  <ProlongControls>
                     <label htmlFor="">Prolong for:</label>
                     <input
                        step="1"
                        type="number"
                        placeholder="0"
                        value={prolongValue}
                        onChange={(e) => setProlongValue(e.target.value)}
                     />
                     <div>
                        <ControlButton
                           onClick={closeModal}
                           background="#444"
                           background_hover="#484848">
                           Cancel
                        </ControlButton>
                        <ControlButton
                           onClick={prolongConfirmClick}
                           background="#594ab6"
                           background_hover="#6152c2">
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
                  </ProlongControls>
               </div>
            </ModalContent>
         </Modal>
         <Modal ref={modalRef2}>
            <ModalContent>
               <span>Devide substake № {id}</span>
               <div>
                  <b>Divide sub-stake into two parts</b>
                  <DivideControls id="divide" onSubmit={divideConfirmClick}>
                     <div>
                        <label htmlFor="">New substake value (NU):</label>
                        <input
                           required
                           step="1"
                           type="number"
                           placeholder="0"
                           value={newStakeValue}
                           onChange={(e) => setNewStakeValue(e.target.value)}
                        />
                        <p>Current substake value {currentStake} NU</p>
                        <p>Note: Minimum substake value is 15000 NU</p>
                     </div>
                     <div>
                        <label htmlFor="">Extend for:</label>
                        <input
                           required
                           step="1"
                           type="number"
                           placeholder="0"
                           value={newStakeExtendValue}
                           onChange={(e) => setNewStakeExtendValue(e.target.value)}
                        />
                     </div>
                     <div>
                        <ControlButton
                           type='button'
                           background="#444"
                           onClick={closeModal2}
                           background_hover="#484848">
                           Cancel
                        </ControlButton>
                        <ControlButton
                           type="submit"
                           form="divide"
                           // onClick={divideConfirmClick}
                           background="darkgreen"
                           background_hover="#077007">
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
                  </DivideControls>
               </div>
            </ModalContent>
         </Modal>
      </div>
   );
};
export default Substakes;
