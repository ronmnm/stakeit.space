import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.css'

export default props => {
   return (
      <div className="my_nav">
         <NavLink className="my_nav_item disable" to="/stake">Stake</NavLink>
         <NavLink className="my_nav_item disable" to="/manage">Manage</NavLink>
         <NavLink className="my_nav_item disable" to="/withdraw">Withdraw</NavLink>
         <NavLink className="my_nav_item" to="/worklock">Worklock</NavLink>
      </div>
   );
};
