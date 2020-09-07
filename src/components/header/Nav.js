import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import styled from 'styled-components';

const NavWrapper = styled.div`
   padding: 0 20px;
   grid-area: nav;
   height: 80px;
   display: grid;
   grid-auto-flow: column;
   align-items: center;
   grid-template-columns: repeat(3, minmax(120px, 140px));
   column-gap: 10px;
   .my_nav_item {
      text-align: center;
      padding: 6px 0;
      width: 100%;
      margin: 0 auto;
      border-radius: 10px;
      text-decoration: none;
      /* text-transform: uppercase; */
      letter-spacing: 0.3px;
      font-size: 13px;
      font-weight: 600;
      color: ${({theme}) => theme.textPrimary};
      
      &:hover {
         transition: 0.2s;
         color: ${({theme}) => theme.darkMode ? '#cccccc' : '#888'};
      }
   }
   .active {
      color: ${({theme}) => theme.textWhiteBlue};
      background-color: ${({theme}) => theme.backgroundPale};
      &:hover{
         color: ${({theme}) => theme.textWhiteBlue};
      }
   }
   .disable {
      color: ${({theme}) => theme.background4};
      pointer-events: none;
   }
`;

const Nav = ({ accountStatus }) => {
   let disable = null;
   if (accountStatus !== 'OK') {
      disable = 'disable';
   }

   return (
      <NavWrapper>
         <NavLink className={`my_nav_item`} to="/stake">
            Stake
         </NavLink>
         {disable ? <Redirect to="/stake" /> : null}
         <NavLink className={`my_nav_item ${disable}`} to="/manage">
            Manage
         </NavLink>

         <NavLink className={`my_nav_item ${disable}`} to="/worklock">
            Worklock
         </NavLink>
      </NavWrapper>
   );
};

const mapDispatchToProps = ({ metamask }) => ({
   accountStatus: metamask.accountStatus,
});
export default connect(mapDispatchToProps)(Nav);
