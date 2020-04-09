import React from "react";
import "./Footer.css";

export default class Footer extends React.Component {
   render() {
      const {
         percentLocked,
         lockedNu,
         activeStakers,
         currentPeriod,
         circulatingSupply
      } = this.props.footerData;

      return (
         <div className="my_footer">
            <div className="my_footer_wrapper">
               <p className="my_footer_item">
                  Current Period <span>{currentPeriod}</span>
               </p>
               <p className="my_footer_item">
                  Total NU Staked <span>{lockedNu}</span>
               </p>
               <p className="my_footer_item">
                  Circulating Supply
                  <span>{circulatingSupply} Bn</span>
               </p>
               <p className="my_footer_item">
                  Staking Ratio <span>{percentLocked} %</span>
               </p>
               <p className="my_footer_item">
                  Active Stakers <span>{activeStakers}</span>
               </p>
            </div>
         </div>
      );
   }
}
