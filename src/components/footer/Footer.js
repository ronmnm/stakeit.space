import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ToggleButtonContainer from './ToggleThemeButton';

const FooterStyled = styled.div`
   background-color: ${({ theme }) => theme.footerBackground};
   /* border-top: 1px solid ${({ theme }) => theme.footerBorder}; */
   height: 60px;
   margin-top: auto;
   position: fixed;
   bottom: 0;
   width: 100%;
   font-size: 12px;
   display: grid;
   grid-template-columns: 1fr 45px;
   z-index: 1;

   .switch_button {
      display: grid;
      align-content: center;
      div {
         width: 28px;
         height: 28px;
         padding: 7px;
         border-radius: 8px;
         cursor: pointer;
         background-color: ${({ theme }) => theme.backgroundPale};
         /* border: 1px solid ${({ theme }) => theme.footerBorder}; */
         &:hover {
            
         }
         svg {
            fill: #ddd;
            /* fill: ${({ theme }) => theme.svgFooter}; */
         }
      }
      img {
         color: white;
      }
   }
`;

const FooterItems = styled.div`
   display: flex;
   margin-left: 45px;
   align-items: center;
   justify-self: center;
   .footer_item {
      color: ${({ theme }) => theme.textSecondary};
      margin: 0 10px;
      span:last-child {
         background-color: ${({ theme }) => theme.backgroundPale};
         font-weight: 600;
         padding: 3px 8px;
         margin: 0px 5px;
         color: ${({ theme }) => (theme.footerAccentText ? theme.footerAccentText : theme.textPrimary)};
         border-radius: 5px;
      }
   }
`;
const Footer = ({ percentLocked, lockedNu, activeStakers, currentPeriod, circulatingSupply, isFooterDataLoading }) => {

   if(isFooterDataLoading){
      return <FooterStyled />
   }
   return (
      <FooterStyled>
         <FooterItems>
            <div className="footer_item">
               <span>Current Period</span>
               <span>{currentPeriod}</span>
            </div>
            <div className="footer_item">
               <span>Total NU Staked</span>
               <span>{lockedNu}</span>
            </div>
            <div className="footer_item">
               <span>Circulating Supply</span>
               <span>{circulatingSupply} Bn</span>
            </div>
            <div className="footer_item">
               <span>Staking Ratio</span>
               <span>{percentLocked} %</span>
            </div>
            <div className="footer_item">
               <span>Active Stakers</span>
               <span>{activeStakers}</span>
            </div>
         </FooterItems>
         <ToggleButtonContainer />
      </FooterStyled>
   );
};

const mapStateToProps = ({user}) => ({...user.footer, isFooterDataLoading: user.isFooterDataLoading });
export default connect(mapStateToProps)(Footer);
