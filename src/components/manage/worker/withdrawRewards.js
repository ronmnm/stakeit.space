import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {withdrawNuThunk, withdrawPolicyThunk} from '../../../redux/settersReducer';
import {Svg7} from '../../loader/7';

const RewardsSection = styled.form`
   .rewards_title {
      display: grid;
      justify-content: space-between;
      grid-auto-flow: column;
      margin-top: 50px;
      margin-bottom: 5px;
      padding-bottom: 11px;
      color: ${({ theme }) => theme.textPrimary};
      font-weight: 600;
      margin-right: 12px;
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
   .withdraw_button {
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

const WithdrawButton = styled.div`
   display: grid;
   grid-auto-flow: column;
   padding: 0 5px;
   border-radius: 8px;
   &:hover {
      background-color: ${({ theme }) => theme.independenceDark};
      cursor: pointer;
   }
   .button_text {
      padding: 0 5px;
      .button_text_bold{
         color: ${({theme}) => theme.textPrimary};
         font-weight: 600;
      }
      span {
         margin-left: 3px;
      }
      
   }
   .button_logo {
      display: grid;
      padding: 0 5px;
      justify-content: center;
      align-content: center;
      width: 30px;
      .withdraw_icon {
         width: 15px;
         padding-bottom: 3px;
         fill: ${({ theme }) => theme.textPrimary};
      }

      svg {
         stroke: ${({ theme }) => theme.textSecondary};
      }
   }
`;

const WithdrawRewards = ({
   stakingRewards,
   policyFee,
   withdrawNuThunk,
   withdrawPolicyThunk,
   showWithdrawNuLoader,
   showWithdrawPolicyLoader,
}) => {
   const handleWithdrawNu = () => {
      withdrawNuThunk(stakingRewards);
   };
   const handleWithdrawPolicy = () => {
      withdrawPolicyThunk();
   };
   return (
      <RewardsSection>
         <div className="rewards_title">
            <span>Rewards</span>
            <span>Withdraw</span>
         </div>
         <div className="rewards_items">
            <RewardItem
               loading={showWithdrawNuLoader}
               callback={handleWithdrawNu}
               text="Staking Rewards:"
               value={(+stakingRewards.toLocaleString('en-Us')).toFixed(3)}
               label="NU"
            />
            <RewardItem
               loading={showWithdrawPolicyLoader}
               callback={handleWithdrawPolicy}
               text="Policy Fee:"
               value={policyFee}
               label="Eth"
            />
         </div>
      </RewardsSection>
   );
};

const RewardItem = ({ text, value, label, callback, loading }) => {
   return (
      <RewardItemWrapper>
         <div>{text}</div>
         <div className="withdraw_button">
            <WithdrawButton onClick={callback}>
               <div className="button_text">
                  <span className='button_text_bold'>{value}</span>
                  <span>{label}</span>
               </div>
               <div className="button_logo">
                  {loading ? (
                     <Svg7 />
                  ) : (
                     <svg className="withdraw_icon" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <path d="m13.25 18h-2.5c-.689 0-1.25-.561-1.25-1.25v-5.75h-2.75c-.657 0-.998-.791-.543-1.268l5.25-5.5c.283-.296.803-.296 1.086 0l5.25 5.5c.455.477.114 1.268-.543 1.268h-2.75v5.75c0 .689-.561 1.25-1.25 1.25z" />
                        <path d="m21 24h-18c-1.654 0-3-1.346-3-3v-5c0-1.654 1.346-3 3-3h1.5c.552 0 1 .448 1 1s-.448 1-1 1h-1.5c-.551 0-1 .449-1 1v5c0 .551.449 1 1 1h18c.551 0 1-.449 1-1v-5c0-.551-.449-1-1-1h-1.5c-.552 0-1-.448-1-1s.448-1 1-1h1.5c1.654 0 3 1.346 3 3v5c0 1.654-1.346 3-3 3z" />
                     </svg>
                  )}
               </div>
            </WithdrawButton>
         </div>
      </RewardItemWrapper>
   );
};

const mapStateToProps = ({ user, setters }) => ({
   stakingRewards: user.manage.stakerNuUnlocked,
   policyFee: user.manage.policyFee,
   showWithdrawNuLoader: setters.showWithdrawNuLoader,
   showWithdrawPolicyLoader: setters.showWithdrawPolicyLoader,
});
export default connect(mapStateToProps, { withdrawNuThunk, withdrawPolicyThunk })(WithdrawRewards);
