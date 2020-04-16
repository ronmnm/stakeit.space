import React from 'react';
import styled from 'styled-components';
import Blockies from 'react-blockies';
import { connect } from 'react-redux';
import { colors } from '../../../constants/colors';
import RoundSpinner from '../../loader/7.svg';

const InstallButton = styled.div`
   width: 140px;
   height: 30px;
   border-radius: 8px;
   background-color: #333;
   display: flex;
   justify-content: center;
   align-items: center;
   transition: 0.3s;
   &:hover {
      background-color: #444;
      cursor: pointer;
   }
   span {
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.5px;
   }
`;

const LoadingButton = styled(InstallButton)`
   &:hover {
      cursor: default;
      background-color: #333;
   }
   img {
      margin: auto;
   }
`;

const AddressButton = styled(InstallButton)`
   justify-content: flex-start;
   .ident_icon {
      display: flex;
      align-items: center;
      height: 30px;
      width: 30px;
      border-radius: 7px;
      canvas {
         border-radius: 5px;
         margin: auto;
      }
   }
   span {
      letter-spacing: 0.5px;
      display: flex;
      font-size: 13px;
      color: ${colors.whiteText};
      justify-content: flex-end;
      margin: 0 auto;
   }
`;

const ConnectButton = styled(InstallButton)`
   background-color: ${colors.blue};
   /* border: 1px solid ${colors.blue}; */
   span {
      color: ${colors.whiteText};
      transition: .2s;
   }
   &:hover {
      background-color: ${colors.hoverBlue};
   }
`;

const WrongButton = styled(InstallButton)`
   background-color: rgb(48, 7, 0);
   border: 1px solid #cf3903;
   &:hover {
      cursor: default;
      background-color: rgb(48, 7, 0);
   }
   span {
      color: #ff5416;
   }
`;

const Address = ({ account, status, onClick }) => {
   // let content;
   switch (status) {
      case 'OK':
         return (
            <AddressButton>
               <div className="ident_icon">
                  <Blockies seed={account} size={7} scale={3} color="#B692BE" spotColor="#18335E" />
               </div>
               <span>
                  {account.slice(0, 6)}...{account.slice(38, 42)}
               </span>
            </AddressButton>
         );
      case 'WRONG':
         return (
            <WrongButton>
               <span>Wrong Network</span>
            </WrongButton>
         );
      case 'LOADING':
         return (
            <LoadingButton>
               <img src={RoundSpinner} alt="load" />
            </LoadingButton>
         );
      case 'INSTALL':
         return (
            <InstallButton>
               <span>Install Metamask</span>
            </InstallButton>
         );
      case 'CONNECT':
         return (
            <ConnectButton onClick={onClick}>
               <span>Connect a wallet</span>
            </ConnectButton>
         );
      default:
         return <div>hi</div>
   }
};

const mapStateToProps = ({address, status}) => ({ account: address.address, status: status.status, onClick: status.onConnectClick });

export default connect(mapStateToProps)(Address);
