import React from 'react';
import styled from 'styled-components';
import ClipboardJS from 'clipboard';
import Icon from './link-icon/link-icon';

const AddressTitle = styled.h4`
   font-weight: 400;
   margin-bottom: 7px;
   color: rgb(119, 119, 119);
`;
const AddressETH = styled.div`
   display: grid;
   grid-auto-flow: column;
   grid-template-columns: min-content;
   margin: 20px 0 10px 0;
   height: 40px;
   align-items: center;
   position: relative;
   .address_eth {
      letter-spacing: 1.3px;
      font-weight: 600;
      display: inline-block;
      font-size: 24px;
      cursor: pointer;
      border-radius: 8px;
      padding: 7px 0;
      
      color: ${({theme}) => theme.textPrimary};
      &:hover {
         transition: 0.1s;
         background-color: ${({ theme }) => theme.independenceDark};
      }
   }
   .worker_not_set {
      letter-spacing: 1px;
      font-weight: 600;
      display: inline-block;
      font-size: 24px;
      width: 200px;
      color: ${({theme}) => theme.textSecondary}
   }
   .copied {
      position: absolute;
      top: 37px;
      left: 50px;
      padding: 2px 14px;
      color: ${({ theme }) => theme.textPrimary};
      border-radius: 7px;
      background-color: ${({ theme }) => theme.buttonPrimary};
   }
`;

new ClipboardJS('.address_eth');


const EthAccountContainer = ({ address, title, children, copied, onAddrClick }) => {
   if (address === '0x0000000000000000000000000000000000000000') {
      return (
         <>
            <AddressTitle>{title}</AddressTitle>
            <AddressETH>
               <span className="worker_not_set">Worker not set</span>
               {children}
            </AddressETH>
         </>
      );
   }
   return (
      <>
         <AddressTitle>{title}</AddressTitle>
         <AddressETH>
            {copied ? <span className="copied">Copied</span> : null}
            <span onClick={onAddrClick} className="address_eth" data-clipboard-text={address}>
               {address.slice(0, 6)}...{address.slice(38, 42)}
            </span>
            <Icon address={address} />
            {children}
         </AddressETH>
      </>
   );
};
export default EthAccountContainer;
