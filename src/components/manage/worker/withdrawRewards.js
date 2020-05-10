import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const RewardsSection = styled.form`
   .rewards_title {
      display: grid;
      justify-content: space-between;
      grid-auto-flow: column;
      margin-top: 35px;
      margin-bottom: 5px;
      padding-bottom: 11px;
      border-bottom: 1px solid ${({theme}) => theme.background2};
      color: ${({theme}) => theme.textPrimary};
      font-weight: 600;
   }
   .rewards_items {
      padding-bottom: 5px;
   }
`;
const RewardItemWrapper = styled.div`
   display: grid;
   grid-auto-flow: column;
   grid-template-columns: 110px 1fr;
   margin: 0;
   color: ${({ theme }) => theme.textSecondary};
   b {
      color: ${({ theme }) => theme.textPrimary};
   }
   div {
      font-size: 13px;
      height: 30px;
      line-height: 30px;
   }
   div:last-child {
      display: grid;
      grid-auto-flow: column;
      justify-content: flex-end;
      b {
         color: ${({ theme }) => theme.textPrimary};
               font-weight: 700;
               letter-spacing: 0.3px;
         span {
            color: ${({ theme }) => theme.textSecondary};
            font-weight: 500;
         }
      }
   }
`;

const WithdrawButton = styled.span`
   width: 28px;
   height: 28px;
   border-radius: 8px;
   margin: 0 16px 0 27px;
   padding: 1px 6px 8px 6px;
   svg {
      fill: ${({ theme }) => theme.textSecondary};
      
   }
   &:hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.backgroundPaleHover};
      svg {
         fill: ${({ theme }) => theme.textPrimary};
      }
   }
`;

const WithdrawRewards = ({ stakingRewards, policyFee }) => {
   return (
      <RewardsSection>
         <div className="rewards_title">
            <span>Rewards</span>
            <span>Withdraw</span>
         </div>
         <div className="rewards_items">
            <RewardItem text="Staking Rewards:" value={stakingRewards.toLocaleString('en-Us')} label="NU" />
            <RewardItem text="Policy Fee:" value={policyFee} label="ETH" />
         </div>
      </RewardsSection>
   );
};

const RewardItem = ({ text, value, label }) => {
   return (
      <RewardItemWrapper>
         <div>{text}</div>
         <div>
            <b>{value}<span> {label}</span></b>
            <WithdrawButton>
               <svg
                  id="bold"
                  enableBackground="new 0 0 24 24"
                  viewBox="0 0 24 24"
               >
                  <path d="m13.25 18h-2.5c-.689 0-1.25-.561-1.25-1.25v-5.75h-2.75c-.657 0-.998-.791-.543-1.268l5.25-5.5c.283-.296.803-.296 1.086 0l5.25 5.5c.455.477.114 1.268-.543 1.268h-2.75v5.75c0 .689-.561 1.25-1.25 1.25z" />
                  <path d="m21 24h-18c-1.654 0-3-1.346-3-3v-5c0-1.654 1.346-3 3-3h1.5c.552 0 1 .448 1 1s-.448 1-1 1h-1.5c-.551 0-1 .449-1 1v5c0 .551.449 1 1 1h18c.551 0 1-.449 1-1v-5c0-.551-.449-1-1-1h-1.5c-.552 0-1-.448-1-1s.448-1 1-1h1.5c1.654 0 3 1.346 3 3v5c0 1.654-1.346 3-3 3z" />
               </svg>
            </WithdrawButton>
         </div>
      </RewardItemWrapper>
   );
};

const mapDispatchToProps = ({ user }) => ({
   stakingRewards: user.manage.stakerNuUnlocked,
   policyFee: user.manage.policyFee,
});
export default connect(mapDispatchToProps)(WithdrawRewards);
