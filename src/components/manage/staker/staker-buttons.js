import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import { connect } from 'react-redux';
import RoundSpinner from '../../loader/7.svg';

// del
import ServiceWeb3Setters from '../../../services/web3-service-setters';

const StakerButtonsWrapper = styled.div`
   margin-top: 30px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   h4 {
      font-weight: 500;
      color: ${({ theme }) => theme.textPrimary};
      span {
         font-size: 12px;
         margin: 0 10px;
         border: 1px solid ${({ theme }) => theme.independenceDark};
         color: ${({ theme }) => theme.textSecondary};
         border-radius: 7px;
         padding: 2px 8px;
         /* margin-bottom: 5px; */
      }
   }
   .btn_group {
      width: 124px;
      background-color: ${({ theme }) => (theme.darkMode ? theme.independenceDark : theme.addressBackground)};
      border-radius: 10px;
      button {
         width: 62px;
         background-color: ${({ theme }) => (theme.darkMode ? theme.independenceDark : theme.addressBackground)};
         border: none;
         color: ${({ theme }) => theme.textSecondary};
         padding: 6px 22px;
         cursor: pointer;
         font-family: 'Lato', sans-serif;
         border-radius: 10px;
         height: 29px;
         &:hover {
            color: ${({ theme }) => theme.textPrimary};
            transition: 0.2s;
         }
         &:focus {
            outline: none;
         }
      }
      .button_active {
         /* border: 1px solid ${({ theme }) => theme.buttonPrimary}; */
         background-color: ${({ theme }) => theme.buttonPrimary};
         pointer-events: none;
         cursor: none;
         color: #F6F9FF;
         font-weight: 600;
      }
   }
`;

const StakerButtons = ({ status, reStakeDisabled, windDown, setRestake, setWinddown }) => {
   const innerText = <img src={RoundSpinner} alt=""/>
   const handleRestake = value => {
      ReactGA.event({
         category: 'Manage tab',
         action: `Restake ${value ? 'On' : 'Off'}`,
         label: 'manage_tab_label',
      });
      ServiceWeb3Setters.setRestake(value);
   };

   const handleWinddown = value => {
      ReactGA.event({
         category: 'Manage tab',
         action: `Winddown ${value ? 'On' : 'Off'}`,
         label: 'manage_tab_label',
      });
      setWinddown(true);
   };

   return (
      <StakerButtonsWrapper>
         <div>
            <h4>
               Re-Stake<span>{status}</span>
            </h4>
            <ButtonGroup callback={handleRestake} parameter={!reStakeDisabled} innerText={innerText} />
         </div>

         <div>
            <h4>Wind-Down</h4>
            <ButtonGroup callback={handleWinddown} parameter={windDown} />
         </div>
      </StakerButtonsWrapper>
   );
};

const ButtonGroup = ({ callback, parameter, innerText }) => {
   return (
      <div className="btn_group">
         <button className={parameter ? 'button_active' : null} onClick={() => callback(true)}>
            {'On'}
         </button>
         <button className={!parameter ? 'button_active' : null} onClick={() => callback(false)}>
            {innerText || 'Off'}
         </button>
      </div>
   );
};

const mapDispatchToProps = ({ user }) => ({
   setRestake: user.setters.setRestake,
   setWinddown: user.setters.setWinddown,
});

export default connect(mapDispatchToProps)(StakerButtons);
