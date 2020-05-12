import React from 'react';
import styled from 'styled-components';
import { ModalButton } from '../../buttons/buttons';
import { Svg7 } from '../../loader/7';
import {connect} from 'react-redux'

export const ModalContent = styled.div`
   display: grid;
   grid-template-rows: 1fr 4fr;
   grid-auto-columns: 1fr;
   justify-content: center;
   height: 100%;
   padding: 15px 18px;
   text-align: center;
   span {
      background-color: ${({ theme }) => theme.background2};
      /* border: 1px solid ${({ theme }) => theme.backgroundPale}; */
      border-radius: 10px;
      height: 50px;
      width: 100%;
      line-height: 50px;
      box-shadow: ${({ theme }) => (theme.darkMode ? '0 4px 22px #2e2e2e' : null)};
      color: ${({ theme }) => theme.textPrimary};
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
      color: ${({ theme }) => theme.textSecondary};
   }
   label {
      color: ${({ theme }) => theme.textSecondary};
      margin-bottom: 7px;
      display: block;
      font-size: 12px;
   }
   input {
      width: 100%;
      justify-self: center;
      height: 45px;
      background-color: ${({ theme }) => (theme.darkMode ? theme.independenceDark : theme.backgroundPale)};
      /* border: 1px solid ${({ theme }) => theme.backgroundPale}; */
      text-align: center;
      border: none;
      border-radius: 10px;
      font-size: 15px;
      color: ${({ theme }) => theme.textPrimary};
      margin-bottom: 60px;
      letter-spacing: 0.4px;
      font-family: Lato, sans-serif;
      border: 1px solid ${({ isValid, theme }) => (isValid ? theme.background2 : 'tomato')};
      &:focus {
         outline: none;
         background-color: ${({ theme }) => theme.independenceDarkHover};
         transition: .3s;
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
      svg{
         height: 22px;
         width: 22px;
         margin-top: 8px;
      }
   }
`;

const SetWorkerModal = ({ isValid, inputAddress, closeModal, handleClick, handleInputChange, showWorkerLoader }) => {
   return (
      <ModalContent isValid={isValid}>
         <span>Bond a worker to a staker</span>
         <div>
            <b>Note: The Worker cannot be changed for a minimum of 2 periods once set.</b>
            <label htmlFor="">Enter ETH address:</label>
            <input placeholder="0x..." value={inputAddress} onChange={e => handleInputChange(e.target.value)} />
         </div>
         <div className="button_wrapper">
            <ModalButton onClick={closeModal}>Cancel</ModalButton>
            <ModalButton blue={true} onClick={handleClick}>
               {showWorkerLoader ? <Svg7 /> : 'Confirm'}
            </ModalButton>
         </div>
      </ModalContent>
   );
};

const mapDispatchToProps = ({setters}) => ({
   showWorkerLoader: setters.showWorkerLoader
})
export default connect(mapDispatchToProps)(SetWorkerModal)
