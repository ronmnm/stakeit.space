import React from 'react';
import {connect} from 'react-redux';

import Stake, {StakeWrapper} from './Stake';
import {BlueButton, GreyButton} from './Buttons';

import ConfirmationText from './ConfirmationText';
import {addNewStake} from '../../services/stake-service';

// const stakeService = new StakeService()

class StakeContainer extends React.Component {
   state = {
      clicked: false,
      confirmBtnLoading: false,
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
      await addNewStake(this.props.amount, this.props.duration);
      this.setState({ confirmBtnLoading: false });
   }

   backClick() {
      this.setState({ clicked: false });
   }

   onButtonClick(e) {
      e.preventDefault();
      this.setState({ clicked: true });
   }

   render() {
      const { amount, duration } = this.props;

      let amount_error;
      if (amount >= 15000 || amount === null) {
         amount_error = false;
      } else {
         amount_error = true;
      }

      const reg = /^([3-8][0-9]|9[0-9]|[12][0-9]{2}|3[0-5][0-9]|36[0-5])$/
      let duration_error;
      if (reg.test(duration) || duration === null) {
         duration_error = false;
      } else {
         duration_error = true;
      }

      let disable = true;
      if (reg.test(duration) && amount >= 15000) {
         disable = false;
      }

      let loading = false;
      if (this.state.confirmBtnLoading === true) {
         loading = true;
      }

      if (this.state.clicked) {
         return (
            <StakeWrapper>
               <h4>Add New Stake</h4>
               <div>
                  <ConfirmationText account={this.props.account} amount={amount} duration={duration} />

                  <div className="button_group_confirm">
                     <GreyButton onClick={this.backClick} text="Back" />

                     <BlueButton onClick={this.confirmationClick} loading={loading} text="Confirm" />
                  </div>
               </div>
            </StakeWrapper>
         );
      }

      return (
         <Stake
            balanceNu={this.props.balanceNu}
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

const mapStateToProps = ({ user }) => ({
   balanceNu: user.balanceNu,
   account: user.account,
});

export default connect(mapStateToProps)(StakeContainer);
