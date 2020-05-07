import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import ToggleButtonContainer from './ToggleThemeButton';

const FooterStyled = styled.div`
   background-color: ${({ theme }) => theme.footerBackground};
   border-top: 1px solid ${({ theme }) => theme.footerBorder};
   height: 60px;
   margin-top: auto;
   position: fixed;
   bottom: 0;
   width: 100%;
   font-size: 12px;
   display: grid;
   grid-template-columns: 1fr 50px;
   z-index: 1;
`;

const FooterItems = styled.div`
   display: flex;
   margin-left: 50px;
   align-items: center;
   justify-self: center;
   .footer_item {
      color: ${({ theme }) => theme.textSecondary};
      margin: 0 10px;
      span:last-child {
         background-color: ${({ theme }) => theme.background2};
         font-weight: 600;
         padding: 3px 8px;
         margin: 0px 5px;
         color: ${({ theme }) => (theme.footerAccentText ? theme.footerAccentText : theme.textPrimary)};
         border-radius: 5px;
      }
   }
`;
const Footer = ({ percentLocked, lockedNu, activeStakers, currentPeriod, circulatingSupply, isFooterDataLoading }) => {

   return (
      <FooterStyled>
         <FooterItems>
            <div className="footer_item">
               <span>Current Period</span>
               <span>{isFooterDataLoading ? '0' : currentPeriod}</span>
            </div>
            <div className="footer_item">
               <span>Total NU Staked</span>
               <span>{isFooterDataLoading ? '0' : lockedNu}</span>
            </div>
            <div className="footer_item">
               <span>Circulating Supply</span>
               <span>{isFooterDataLoading ? '0' : circulatingSupply} Bn</span>
            </div>
            <div className="footer_item">
               <span>Staking Ratio</span>
               <span>{isFooterDataLoading ? '0' : percentLocked} %</span>
            </div>
            <div className="footer_item">
               <span>Active Stakers</span>
               <span>{isFooterDataLoading ? '0' : activeStakers}</span>
            </div>
         </FooterItems>
         <ToggleButtonContainer />
      </FooterStyled>
   );
};

const mapStateToProps = ({user}) => ({...user.footer, isFooterDataLoading: user.isFooterDataLoading });
export default connect(mapStateToProps)(Footer);
