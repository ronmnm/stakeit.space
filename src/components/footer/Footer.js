import React from "react";
import "./Footer.css";


export default class Footer extends React.Component {

  render() {
    const {
      currentPeriod,
      getActiveStakers,
      percentOfLockedNu,
      lockedNu
    } = this.props;
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
            Staking Ratio <span>{percentOfLockedNu} %</span>
          </p>
          <p className="my_footer_item">
            Active Stakers <span>{getActiveStakers}</span>
          </p>
        </div>
      </div>
    );
  }
}
