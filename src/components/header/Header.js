import React from 'react';
import Nav from './Nav';
import Address from './Address';
import './Header.css';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
   display: grid;
   /* grid-template-columns: minmax(100px, 250px) minmax(480px, 600px) minmax(100px, 250px); */
   /* grid-template-columns: minmax(250px 300px) minmax(480px, 600px) minmax(250px 300px); */
   justify-items: center;
   align-content: center;
   align-items: center;
   /* border-bottom: 1px solid #222; */
   margin: 0 auto;
`;

const Header = () => {
   return (
      <div className="my_header">
         <div className="logo">
            <span><a href="https://github.com/nucypher/stakeit.space" target="_blank">GitHub</a></span>
         </div>
         <Nav />
         <div className="my_address">
            <Address />
         </div>
      </div>
   );
};
export default Header;
