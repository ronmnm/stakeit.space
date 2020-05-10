import React from 'react';
import styled from 'styled-components'

const NoStakesStyled = styled.div`
   display: grid;
   background-color: ${({theme}) => theme.independenceDark};
   border-radius: 10px;
   align-content: center;
   justify-content: center;
   height: 80px;
   span{
      color: grey;
   }
`;

const NoStakes = () => {
   return (
      <NoStakesStyled>
         <span>You don't have any stakes yet.</span>
      </NoStakesStyled>
   );
};

export default NoStakes;
