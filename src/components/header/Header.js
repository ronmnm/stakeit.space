import React from 'react';
// import Nav from "./Nav";
import Address from './address/Address';
import './Header.css';

import { NavLink } from 'react-router-dom';


export default class Header extends React.Component {

   render() {

      return (
         <div className="my_header">
            <div className="logo">
               <span>stakeit.space</span>
            </div>
            <div className="my_nav">
               <NavLink className="my_nav_item" to="/stake">
                  Stake
               </NavLink>
               <NavLink className="my_nav_item" to="/manage">
                  Manage
               </NavLink>
               {/* <NavLink className="my_nav_item disable" to="/rewards">
            Rewards
          </NavLink> */}
               <NavLink className="my_nav_item" to="/worklock">
                  Worklock
               </NavLink>
            </div>
            <div className="my_address"><Address /></div>
         </div>
      );
   }
}
