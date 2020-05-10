import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
   border: 1px solid ${({theme}) => theme.footerBorder};
   background-color: ${({theme}) => theme.addressBackground};
   border-radius: 5px;
   width: 100%;
   color: ${({theme}) => theme.textPrimary};
   .disabled {
      background-color: #303030 !important;
      pointer-events: none !important;
      color: #666 !important;
   }
   p {
      margin-top: 20px;
      text-align: center;
      display: block;
   }
   span {
      display: block;
      text-align: center;
      /* width: 100%; */
      color: ${({theme}) => theme.textPrimary};
      background-color: #555;
      margin: 30px 50px 25px 50px;
      height: 35px;
      /* padding: 7px 0; */
      border-radius: 5px;
      transition: 0.2s;
      line-height: 35px;
      :hover {
         cursor: pointer;
         color: white;
         background-color: rgb(94, 94, 94);
         box-shadow: 0 5px 20px rgb(19, 19, 19);
      }
      :active {
         background-color: #555;
      }
   }
   h3 {
      letter-spacing: 1px;
      margin-bottom: 5px;
      margin-top: 30px;
      text-align: center;
      display: block;
   }
   b {
      font-weight: 500;
      color: grey;
      text-align: center;
      display: block;
   }
`;

export const ParticipantPanel = ({ title, value, currency, button, disabled, onClick }) => {
   return (
      <Panel>
         <p>{title}</p>
         <h3>{value}</h3>
         <b>{currency}</b>
         <span className={disabled ? 'disabled' : null} onClick={onClick}>
            {button}
         </span>
      </Panel>
   );
};
