import React, {useState} from 'react';
import styled from 'styled-components';
import {ModalButton} from '../../../buttons/buttons';
import {ModalContent} from './divide-modal';
import {Svg7} from '../../../loader/7';
import {connect} from 'react-redux';
import {prolongStakeThunk} from '../../../../redux/settersReducer';

const ProlongControls = styled.div`
   display: grid;
   label {
      margin-bottom: 5px;
      font-size: 12px;
      color: ${({ theme }) => theme.textSecondary};
   }
   input {
      width: 50%;
      justify-self: center;
      height: 40px;
      text-align: center;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      margin-bottom: 79px;
      letter-spacing: 0.8px;
      font-family: Lato, sans-serif;
      color: ${({ theme }) => theme.textPrimary};
      background-color: ${({ theme }) => (theme.darkMode ? theme.independenceDark : theme.backgroundPale)};
      border: 1px solid ${({ isValid, theme }) => (isValid ? theme.background2 : 'tomato')};
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
   div {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 1fr 1fr;
      column-gap: 20px;
   }
`;

const ProlongModal = ({ id, closeModal, showProlongLoader, prolongStakeThunk }) => {
   const [prolongValue, setProlongValue] = useState('');
   const [isValid, setIsValid] = useState(true);

   const handleProlong = () => {
      if (+prolongValue >= 1) {
         prolongStakeThunk(id, prolongValue);
         setIsValid(true);
      } else {
         setIsValid(false);
      }
   };
   return (
      <ModalContent>
         <span>Prolong substake № {id}</span>
         <div>
            <b>Prolong an existing stake’s duration</b>
            <ProlongControls isValid={isValid}>
               <label htmlFor="">Prolong for <i>(days)</i>:</label>
               <input placeholder="0" value={prolongValue} onChange={e => setProlongValue(e.target.value)} />
               <div>
                  <ModalButton onClick={closeModal}>Cancel</ModalButton>
                  <ModalButton blue={true} onClick={handleProlong}>
                     {showProlongLoader ? <Svg7 /> : 'Confirm'}
                  </ModalButton>
               </div>
            </ProlongControls>
         </div>
      </ModalContent>
   );
};

const mapStateToProps = ({ setters }) => ({
   showProlongLoader: setters.showProlongLoader,
});
export default connect(mapStateToProps, {prolongStakeThunk})(ProlongModal);
