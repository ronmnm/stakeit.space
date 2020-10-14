import React from 'react';
import Nav from './Nav';
import Address from './Address';
import './Header.css';

const Header = () => {
   return (
      <div className="my_header">
         <div className="logo">
            <span>
               <a href="https://github.com/nucypher/stakeit.space" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
         </div>
         <Nav />
         <div className="my_address">
            <Address />
         </div>
      </div>
   );
};
export default Header;
