import React, { useState } from 'react';
import styled from 'styled-components';
import { ModalButton } from '../../../buttons/buttons';
import { connect } from 'react-redux';
import { divideStakeThunk } from '../../../../redux/settersReducer';
import { Svg7 } from '../../../loader/7';
// import ModalContent from '../../worker/set-worker-modal'

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
      margin-top: 20px;
      display: block;
      font-weight: 500;
      color: ${({ theme }) => theme.textPrimary};
   }
`;

const DivideContent = styled.div`
   display: grid;
   grid-template-rows: 143px 1fr;
   grid-template-columns: 1.9fr 1fr;
   column-gap: 20px;
   p {
      font-size: 12px;
      text-align: left;
      margin: 0;
      padding-left: 5px;
      padding-top: 5px;
      color: ${({ theme }) => theme.textSecondary};
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
      color: ${({ theme }) => theme.textPrimary};
      display: block;
   }
   input {
      width: 100%;
      justify-self: center;
      height: 40px;
      text-align: center;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      color: ${({ theme }) => theme.textPrimary};
      background-color: ${({ theme }) => (theme.darkMode ? theme.independenceDark : theme.backgroundPale)};
      border: 1px solid ${({ isValid, theme }) => (isValid ? theme.background2 : 'tomato')};
      margin-bottom: 10px;
      letter-spacing: 0.8px;
      font-family: Lato, sans-serif;
      &:focus {
         outline: none;
         background-color: ${({ theme }) => theme.independenceDarkHover};
         transition: 0.3s;
      }
      &::placeholder {
         color: ${({ theme }) => theme.textSecondary};
      }
      &:focus::placeholder {
         opacity: 0;
      }
   }
`;

const DivideModal = ({ id, divideConfirmClick, currentStake, closeModal2, showDivideLoader, divideStakeThunk }) => {
   const [newStakeValue, setNewStakeValue] = useState('');
   const [newStakeExtendValue, setNewStakeExtendValue] = useState('');
   const [isValid, setIsValid] = useState(true);

   const handleDivide = () => {
      if (+newStakeValue >= 15000 && +newStakeExtendValue >= 1) {
         if (!isValid) {
            setIsValid(true);
         }
         divideStakeThunk(id, newStakeValue, newStakeExtendValue);
      } else {
         setIsValid(false);
      }
   };

   return (
      <ModalContent>
         <span>Divide substake № {id}</span>
         <div>
            <b>Divide sub-stake into two parts</b>
            <DivideContent isValid={isValid}>
               <div>
                  <label htmlFor="">New substake value (NU):</label>
                  <input placeholder="0" value={newStakeValue} onChange={e => setNewStakeValue(e.target.value)} />
                  <p>Current substake value {currentStake} NU</p>
                  <p>Note: Minimum substake value is 15000 NU</p>
               </div>
               <div>
                  <label htmlFor="">Extend for:</label>
                  <input
                     placeholder="0"
                     value={newStakeExtendValue}
                     onChange={e => setNewStakeExtendValue(e.target.value)}
                  />
               </div>
               <div>
                  <ModalButton onClick={closeModal2}>Cancel</ModalButton>

                  <ModalButton blue={true} onClick={handleDivide}>
                     {showDivideLoader ? <Svg7 /> : 'Confirm'}
                  </ModalButton>
               </div>
            </DivideContent>
         </div>
      </ModalContent>
   );
};

const mapStateToProps = ({ setters }) => ({
   showDivideLoader: setters.showDivideLoader,
});
export default connect(mapStateToProps, { divideStakeThunk })(DivideModal);
