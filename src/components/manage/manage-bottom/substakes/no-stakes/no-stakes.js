import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NoStakesStyled = styled.div`
   display: grid;
   row-gap: 10px;
   border: 1px solid ${({ theme }) => theme.independenceDark};
   border-radius: 10px;
   align-content: center;
   justify-content: center;
   padding: 25px 0;
   margin-top: 10px;

   span {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 12px;
   }
`;
const AddStakeButton = styled.div`
   display: grid;
   grid-auto-flow: column;
   background-color: ${({ theme }) => theme.independenceDark};
   padding: 5px 11px;
   height: 38px;
   align-items: center;
   margin: 0 10px;
   border-radius: 10px;
   span {
      color: ${({ theme }) => theme.textSecondary};
      font-size: 13px;
      text-align: center;
      line-height: 20px;
   }
   svg {
      fill: ${({ theme }) => theme.darkMode ? theme.textSecondary : theme.background3};
      /* border: 1px solid ${({ theme }) => theme.background2}; */
      /* border-radius: 17px; */
      padding: 4px;
      height: 24px;
      width: 24px;
   }
   &:hover {
      cursor: pointer;
      transition: 0.2s;
      background-color: ${({ theme }) => (theme.darkMode ? '#3B3F4B' : '#f1f1f1')};
   }
`;

const NoStakes = () => {
   return (
      <NoStakesStyled>
         <span>You don't have any stakes yet.</span>
         <NavLink to="/stake">
            <AddStakeButton>
               <svg height="20px" viewBox="0 0 448 448" width="20px" xmlns="http://www.w3.org/2000/svg">
                  <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
               </svg>
               <span>Add new stake</span>
            </AddStakeButton>
         </NavLink>
      </NoStakesStyled>
   );
};

export default NoStakes;
