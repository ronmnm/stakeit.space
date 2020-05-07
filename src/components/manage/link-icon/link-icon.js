import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.a`
   background-color: ${({ theme }) => theme.independenceDark};
   display: grid;
   justify-content: center;
   width: 29px;
   height: 29px;
   border-radius: 10px;
   margin: 0 10px;
   svg {
      height: 16px;
      margin-top: 8px;
      fill: ${({ theme }) => theme.textPrimary};
   }
   &:hover {
      transition: 0.1s;
      background-color: ${({ theme }) => theme.backgroundPaleHover};
   }
`;
const Icon = ({ address }) => {
   return (
      <IconWrapper
         className="a_icon"
         href={`https://goerli.etherscan.io/address/${address}`}
         target="_blank"
         rel="noopener noreferrer">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 22.5"
            version="1.1"
            x="0px"
            y="0px"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            strokeMiterlimit="1.41421">
            <path d="M12.621,2.491c-0.021,0.019 -0.042,0.039 -0.063,0.06l-5.125,5.201c-0.579,0.587 -0.575,1.527 -0.001,2.109l0.691,0.702c0.576,0.584 1.505,0.582 2.079,-0.001l5.126,-5.201c0.021,-0.021 0.04,-0.042 0.059,-0.063l1.573,1.595c0.573,0.582 1.04,0.386 1.04,-0.439l0,-5.957c0,-0.276 -0.219,-0.497 -0.49,-0.497l-5.87,0c-0.82,0 -1.008,0.473 -0.434,1.056l1.415,1.435Zm-9.618,-2.491c-1.665,0 -3.003,1.344 -3.003,3.003l0,11.994c0,1.665 1.344,3.003 3.003,3.003l11.994,0c1.665,0 3.003,-1.344 3.003,-3.003l0,-7.746l0,4.249l-3,-2.488l0,4.492c0,0.826 -0.671,1.496 -1.496,1.496l-9.008,0c-0.826,0 -1.496,-0.671 -1.496,-1.496l0,-9.008c0,-0.826 0.671,-1.496 1.496,-1.496l4.504,0l-2.5,-3l4.249,0l-7.746,0Z" />
         </svg>
      </IconWrapper>
   );
};
export default Icon;
