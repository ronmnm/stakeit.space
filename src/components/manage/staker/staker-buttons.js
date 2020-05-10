import React from 'react';
import ReactGA from 'react-ga';
import styled from 'styled-components';
import {connect} from 'react-redux'

// del
import ServiceWeb3Setters from '../../../services/web3-service-setters'

const StakerButtonsWrapper = styled.div`
   margin-top: 30px;
   display: grid;
   grid-template-columns: 1fr 1fr;
   h4 {
      font-weight: 500;
      color: ${({theme}) => theme.textPrimary};
      span {
         font-size: 12px;
         margin: 0 10px;
         border: 1px solid ${({theme}) => theme.independenceDark};
         color: ${({theme}) => theme.textSecondary};
         border-radius: 7px;
         padding: 2px 8px;
         /* margin-bottom: 5px; */
      }
   }
   .btn_group {
      button {
         background-color: ${({ theme }) => theme.body};
         border: none;
         color: ${({ theme }) => theme.textSecondary};
         padding: 6px 22px;
         cursor: pointer;
         font-family: 'Lato', sans-serif;
         border-radius: 8px;
         height: 29px;
         &:hover {
            color: white;
            transition: 0.2s;
         }
      }
      .button_active {
         border: 1px solid ${({theme}) => theme.buttonPrimary};
         pointer-events: none;
         cursor: none;
         color: ${({theme}) => theme.buttonPrimary};
         font-weight: 600;
      }
   }
`;

const StakerButtons = ({ status, reStakeDisabled, windDown, setRestake, setWinddown }) => {

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
            <div className="btn_group">
               <button className={!reStakeDisabled ? 'button_active' : null} onClick={() => handleRestake(true)}>
                  On
               </button>
               <button className={reStakeDisabled ? 'button_active' : null} onClick={() => handleRestake(false)}>
                  Off
               </button>
            </div>
         </div>

         <div>
            <h4>Wind-Down</h4>
            <div className="btn_group">
               <button className={windDown ? 'button_active' : null} onClick={() => handleWinddown(true)}>
                  On
               </button>
               <button className={!windDown ? 'button_active' : null} onClick={() => handleWinddown(false)}>
                  Off
               </button>
            </div>
         </div>
      </StakerButtonsWrapper>
   );
};

const mapDispatchToProps = ({user}) => ({
   setRestake: user.setters.setRestake,
   setWinddown: user.setters.setWinddown
})

export default connect(mapDispatchToProps)(StakerButtons)