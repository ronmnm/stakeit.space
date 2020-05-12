import React from 'react';
import styled from 'styled-components';
import RoundSpinner from '../loader/7.svg';

const BlueBut = styled.span`
   display: grid;
   justify-content: center;
   text-align: center;
   cursor: pointer;
   background-color: ${({theme}) => theme.buttonPrimary};
   padding: 10px 20px;
   border-radius: 10px;
   width: 120px;
   font-family: 'Lato', sans-serif;
   color: #F6F9FF;
   .round_spinner {
      width: 19px;
      height: 19px;
   }
`;

const GreyBut = styled(BlueBut)`
   background-color: ${({theme}) => theme.background2};
   color: ${({theme}) => theme.textPrimary};

`;

export const BlueButton = ({text, loading, onClick}) => {
   let content = text;
   if (loading) {
      content = <img className="round_spinner" src={RoundSpinner} alt="spinner" />;
   }
   return <BlueBut onClick={onClick}>{content}</BlueBut>;
};

export const GreyButton = ({text, loading, onClick}) => {
   let content = text;
   if (loading) {
      content = <img className="round_spinner" src={RoundSpinner} alt="spinner" />;
   }
   return <GreyBut onClick={onClick}>{content}</GreyBut>;
};
