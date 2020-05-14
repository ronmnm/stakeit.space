import React from 'react';
import styled from 'styled-components';
import Blockies from 'react-blockies';
import { connect } from 'react-redux';
import RoundSpinner from '../loader/7.svg';

const InstallButton = styled.div`
   width: 140px;
   height: 30px;
   border-radius: 8px;
   border: 1px solid ${({ theme }) => theme.background2};
   background-color: ${({ theme }) => theme.addressBackground};
   display: flex;
   justify-content: center;
   align-items: center;
   &:hover {
      cursor: pointer;
   }
   span {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.5px;
      color: ${({ theme }) => theme.textPrimary};
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
      color: ${({ theme }) => theme.whiteText};
      justify-content: flex-end;
      margin: 0 auto;
   }
`;

const ConnectButton = styled(InstallButton)`
   background-color: ${({ theme }) => theme.buttonPrimary};
   border: 1px solid ${({ theme }) => theme.buttonPrimary};
   span {
      color: white;
      font-weight: 600;
      transition: 0.2s;
      font-size: 12px;
   }
   &:hover {
      background-color: ${({ theme }) => theme.buttonBlueHover};
   }
`;

const WrongButton = styled(InstallButton)`
   /* background-color: rgb(48, 7, 0); */
   background-color: #f05d5e;
   border: 1px solid #f05d5e;

   &:hover {
      cursor: default;
      background-color: rgb(48, 7, 0);
      background-color: #f05d5e;
   }
   span {
      color: #ffdbd8;
      font-weight: 700;
   }
`;

const Address = ({ account = '', status, onClick }) => {
   switch (status) {
      case 'OK':
         return (
            <AddressButton>
               <div className="ident_icon">
                  <Blockies seed={account} size={5} scale={4} color="#B692BE" spotColor="#18335E" />
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
               <span>Connect Wallet</span>
            </ConnectButton>
         );
      default:
         return <div>hi</div>;
   }
};

const mapStateToProps = ({ user, metamask }) => ({
   account: user.account,
   status: metamask.accountStatus,
   onClick: metamask.onConnectClick,
});
// const mapDispatchToProps = (dispatch) => ({
//    onClick: status.onConnectClick
// })

export default connect(mapStateToProps)(Address);
