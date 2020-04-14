import React from 'react';
import styled from 'styled-components';
import RoundSpinner from '../loader/7.svg';

const BlueBut = styled.span`
   display: grid;
   justify-content: center;
   text-align: center;
   cursor: pointer;
   background-color: #0077ff;
   padding: 10px 20px;
   border-radius: 5px;
   width: 120px;
   transition: 0.2s;
   height: 39px;
   font-family: 'Lato', sans-serif;
   &:hover {
      background-color: #006ae2;
   }
   &:active {
      background-color: #0062d3;
   }
   .round_spinner {
      width: 19px;
      height: 19px;
   }
`;

const GreyBut = styled(BlueBut)`
   background-color: rgb(59, 59, 59);
   &:hover {
      background-color: rgb(54, 54, 54);
   }
   &:active {
      background-color: rgb(44, 44, 44);
   }
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
