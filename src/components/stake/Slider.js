import React from 'react';
import styled from 'styled-components';

const SliderInput = styled.div`
   width: 95%;
   margin: 0 auto;
   input {
      width: 100%;
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      width: 95%;
      display: block;
      margin: 5px auto;
      height: 6px;
      background: ${({theme}) => theme.background2};
      outline: none;
      opacity: 0.7;
      border-radius: 10px;
      &:focus {
         outline: none;
      }
      &:hover {
         cursor: pointer;
      }
      &::-webkit-slider-thumb {
         -webkit-appearance: none; /* Override default look */
         appearance: none;
         width: 17px;
         height: 17px;
         background: #888;
         cursor: pointer;
         border-radius: 5px;
      }
      &::-webkit-slider-thumb:hover {
         background: #999;
      }
      &::-moz-range-thumb:hover {
         background: #999;
      }
      &::-moz-range-thumb {
         width: 17px;
         height: 17px;
         background: #888;
         opacity: 1;
         cursor: pointer;
         border-radius: 5px;
      }
      &:focus::-moz-range-thumb {
         opacity: 0.99;
      }
   }
   div {
      margin-top: 10px;
      display: grid;
      grid-auto-flow: column;
      justify-content: space-between;
      span {
         color: grey;
         padding: 0 6px 0 10px;
         font-size: 12px;
      }
   }
`;


const Slider = ({ duration, handleDuration }) => {
   return (
      <SliderInput>
         <input
            type="range"
            min="30"
            step="1"
            value={duration || '30'}
            max="365"
            onChange={(e) => handleDuration(e.target.value)}
         />
         <div>
            <span>30</span>
            <span>365</span>
         </div>
      </SliderInput>
   );
};

export default Slider;
