import React from "react";
import s from "./Address-loading.module.css";
import RoundSpinner from '../../../loader/7.svg';

export default class Address extends React.Component {
  render() {
    return (
      <div className={s.my_address}>
        
        <div className={s.my_address_item}>
          
          <img className={s.round_spinner} src={RoundSpinner} alt="React Logo" />
          
          
        </div>
        
      </div>
    );
  }
}
