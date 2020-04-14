import React from 'react';
import ReactGA from 'react-ga';

import Stake from './Stake';
import { StakeWrapper } from './Stake';
import { BlueButton, GreyButton } from './Buttons';


import ConfirmationText from './ConfirmationText';
import StakeService from '../../services/stake-service';

const stakeService = new StakeService();

export default class StakeContainer extends React.Component {
   state = {
      clicked: true,
      confirmBtnLoading: false
   };

   constructor(props) {
      super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
      this.confirmationClick = this.confirmationClick.bind(this);
      this.backClick = this.backClick.bind(this);
   }

   async confirmationClick() {
      this.setState({ confirmBtnLoading: true });
      console.log(this.state.confirmBtnLoading);
      ReactGA.event({
         category: 'Stake tab',
         action: 'Confirm button click',
         label: 'stake_tab_label',
      });
      const approveAndCall = stakeService.getApproveAndCall();
      await approveAndCall(this.props.amount, this.props.duration);
      this.setState({ confirmBtnLoading: false });
   }

   backClick(){
      this.setState({clicked: false})
   }

   onButtonClick(e) {
      e.preventDefault();
      ReactGA.event({
         category: 'Stake tab',
         action: 'Click Stake It button',
         label: 'stake_tab_label',
      });
      this.setState({ clicked: true });
   }


   render() {
      const { amount, duration } = this.props;

      let balanceNu = 0;
      if (this.props.stakeData !== null) {
         balanceNu = this.props.stakeData.balanceNu.toFixed(0);
      }

      let amount_error;
      if (amount >= 15000 || amount === null) {
         amount_error = false;
      } else {
         amount_error = true;
      }

      let duration_error;
      if ((duration >= 30 && duration <= 365) || duration === null) {
         duration_error = false;
      } else {
         duration_error = true;
      }

      let disable = true;
      if (duration >= 30 && duration <= 365 && amount >= 15000) {
         disable = false;
      }

      let loading = false;
      if (this.state.confirmBtnLoading === true) {
         loading = true
      }

      if (this.state.clicked) {
         return (
            <StakeWrapper>
               <h4>Add New Stake</h4>
               <div>
                  <ConfirmationText account={this.props.account} amount={amount} duration={duration} />

                  <div className='button_group_confirm'>
                     <GreyButton 
                        onClick={this.backClick} 
                        text="Back" />

                     <BlueButton 
                        onClick={this.confirmationClick}
                        loading={loading}
                        text="Confirm" />
                  </div>

               </div>
            </StakeWrapper>
         );
      }

      return (
         <Stake
            balanceNu={balanceNu}
            amount={amount}
            duration={duration}
            amount_error={amount_error}
            duration_error={duration_error}
            disable={disable}
            handleAmount={this.props.handleAmount}
            handleDuration={this.props.handleDuration}
            onButtonClick={this.onButtonClick}
         />
      );
   }
}
