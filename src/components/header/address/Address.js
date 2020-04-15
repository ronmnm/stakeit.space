import React from 'react';
import s from './Address.module.css';
import Blockies from 'react-blockies';
import { connect } from 'react-redux';

const Address = ({ account }) => {
   return (
      <React.Fragment>
         {/* <span>{this.props.network}</span> */}
         <div className={s.my_address_item}>
            <div className={s.my_ident_icon}>
               <Blockies 
                  seed={account} 
                  size={7} 
                  scale={3} 
                  color="#B692BE" 
                  spotColor="#18335E" />
            </div>
            <div className={s.my_address_text}>
               {account.slice(0, 6)}...{account.slice(38, 42)}
            </div>
         </div>
      </React.Fragment>
   );
};

const mapStateToProps = (state) => {
   
   return {account: state.address}
}
export default connect(mapStateToProps)(Address);