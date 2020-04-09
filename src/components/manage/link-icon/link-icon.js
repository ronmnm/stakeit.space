import React from 'react'
import s from './link-icon.module.css'
const Icon = ({address}) => {
   return (
      <a
         className={s.a_icon}
         href={`https://goerli.etherscan.io/address/${address}`}
         target="_blank">
         <i
            className={`fas fa-external-link-alt fa-xs ${s.fa_external_link_alt}`}></i>
      </a>
   );
};
export default Icon;