import React from "react";

export default props => {

  return (
    <div>
      <h1>Hello from Withdraw tab</h1>
      <h1>NuNits to withdraw: {parseFloat(props.nuNitsToWithdraw) / 10**18}</h1>
    </div>
  );
};
