import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import utils from 'web3-utils';
import ReactGA from 'react-ga';
import Modal from '../../worklock/modal/modal';
import { ControlButton } from '../manage-bottom/substakes/substakes';
import RoundSpinner from '../../loader/7.svg';
import EthAccountContainer from '../eth-accont-container';
import { connect } from 'react-redux';

import WithdrawRewards from './withdrawRewards';

const WorkerButton = styled.span`
   background-color: #333811;
   border: 1px solid #daefb3;
   padding: 0 24px;
   height: 30px;
   line-height: 29px;
   font-size: 14px;
   display: block;
   justify-self: flex-end;
   font-size: 13px;
   border-radius: 8px;
   text-align: center;
   font-weight: 500;
   color: #daefb3;
   :hover {
      cursor: pointer;
      /* background-color: #4b4b4b; */
      color: #E2FF18;
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
      border: 1px solid ${({ isValid }) => (isValid ? '#4b4b4b' : 'tomato')};
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
   input[type='number']::-webkit-inner-spin-button,
   input[type='number']::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
   }
   input[type='number'] {
      -moz-appearance: textfield;
   }
   .button_wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 10px;
   }
`;

const WorkerWrapper = styled.div`
   grid-area: worker;
   .worker_content {
      margin: 10px 0;
      padding-top: 5px;
      padding-bottom: 5px;
      /* border-bottom: 1px solid #333; */
      border-top: 1px solid ${({ theme }) => theme.independenceDark};
      p {
         display: grid;
         grid-auto-flow: column;
         justify-content: space-between;
         margin: 7px 0;
         color: rgb(119, 119, 119);
         font-size: 13px;
         span {
            color: grey;
            b {
               color: #eee;
               font-weight: 500;
               letter-spacing: 0.8px;
            }
         }
      }
   }
`;

const Worker = ({ worker, workerEthBal, setWorker, confirmedPeriod1 }) => {
   const [inputAddress, setInputAddress] = useState('');
   const [isValid, setIsValid] = useState(true);
   const [isLoading, setIsLoading] = useState(false);
   const [copied, setCopied] = useState(false);

   let buttonContent;
   if (worker === '0x0000000000000000000000000000000000000000') {
      buttonContent = 'Set worker';
   } else {
      buttonContent = 'Change worker';
   }

   useEffect(() => {
      if (inputAddress !== '') {
         setIsValid(utils.isAddress(inputAddress));
      } else {
         setIsValid(true);
      }
   });

   const modalRef = useRef();

   const openModal = e => {
      e.preventDefault();
      modalRef.current.openMod();
   };
   const closeModal = () => {
      modalRef.current.closeMod();
      setInputAddress('');
      setIsValid(true);
   };

   const handleClick = async () => {
      setIsLoading(true);
      ReactGA.event({
         category: 'Manage tab',
         action: 'Open Set Worker Modal',
         label: 'manage_tab_label',
      });
      await setWorker(inputAddress)
         .then(() => setIsLoading(false))
         .catch(() => setIsLoading(false));
      setInputAddress('');
   };

   const onAddrClick = () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
   };

   return (
      <WorkerWrapper>
         <EthAccountContainer copied={copied} onAddrClick={onAddrClick} address={worker} title="Worker Account">
            <WorkerButton onClick={openModal}>{buttonContent}</WorkerButton>
         </EthAccountContainer>
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
         <WithdrawRewards />
         <div>
            <Modal ref={modalRef}>
               <ModalContent isValid={isValid}>
                  <span>Bond a worker to a staker</span>
                  <div>
                     {/* <b>Bond a worker to a staker</b> */}
                     <b>Note: The Worker cannot be changed for a minimum of 2 periods once set.</b>
                     <label htmlFor="">Enter ETH address:</label>
                     <input placeholder="0x..." value={inputAddress} onChange={e => setInputAddress(e.target.value)} />
                  </div>
                  <div className="button_wrapper">
                     <ControlButton onClick={closeModal} background="#444" background_hover="#484848">
                        Cancel
                     </ControlButton>
                     <ControlButton blue onClick={handleClick} background="#0077ff" background_hover="#1683ff">
                        {isLoading ? (
                           <img style={{ marginTop: '10px' }} src={RoundSpinner} alt="React Logo" />
                        ) : (
                           'Confirm'
                        )}
                     </ControlButton>
                  </div>
               </ModalContent>
            </Modal>
         </div>
      </WorkerWrapper>
   );
};

const mapStateToProps = ({ user }) => ({
   worker: user.manage.worker,
   workerEthBal: user.manage.workerEthBal,
   setWorker: user.manage.setWorker,
   confirmedPeriod1: user.manage.confirmedPeriod1,
});
export default connect(mapStateToProps)(Worker);
