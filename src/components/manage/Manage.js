import React from "react";
import "./Manage.css";

export default props => {
  return (
    <div className="my_manage">
      <div className="staker_manage big_item">
        <h1>Staker</h1>
        <p>0x1a41b337136e0D05130cf002D7F580cE581C4Eb1</p>
        <button>ReStake</button>
        <button>Winddown</button>
      </div>
      <div className="worker_manage big_item">
        <h1>Worker</h1>
        <p>0x1a41b337136e0D05130cf002D7F580cE581C4Eb1</p>
      </div>
    </div>
  );
};
