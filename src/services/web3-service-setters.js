import utils from 'web3-utils';
import { Escrow, instancePolicy } from '../ethereum/instances/instances';

export default class ServiceWeb3Setters {
   constructor() {
      this.account = window.ethereum.selectedAddress;
   }
   setRestake = async value => {
      return await Escrow.methods.setReStake(value).send({ from: this.account });
   };

   setWinddown = async value => {
      return await Escrow.methods.setWindDown(value).send({ from: this.account });
   };

   setWorker = async address => {
      return await Escrow.methods.setWorker(address).send({ from: this.account });
   };

   prolongStake = async (index, periods) => {
      return await Escrow.methods.prolongStake(index, periods).send({ from: this.account });
   };

   divideStake = async (index, value, periods) => {
      const nits = utils.toWei(value, 'ether');
      return await Escrow.methods.divideStake(index, nits, periods).send({ from: this.account });
   };

   withdrawNu = async amount => {
      const nits = utils.toWei(String(amount), 'ether');
      return await Escrow.methods.withdraw(nits).send({ from: this.account });
   };
   withdrawPolicy = async () => {
      return await instancePolicy.methods.withdraw().send({ from: this.account });
   };
}
