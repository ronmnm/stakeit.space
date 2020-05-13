import utils from 'web3-utils';
import { Escrow } from '../ethereum/instances/instances';

export default class ServiceWeb3Setters {
   setRestake = async value => {
      // try {
      const account = window.ethereum.selectedAddress;
      return await Escrow.methods.setReStake(value).send({ from: account });
      // } catch (err) {
      //    return console.error('Oh no', err);
      // }
   };

   setWinddown = async value => {
      const account = window.ethereum.selectedAddress;
      return await Escrow.methods.setWindDown(value).send({ from: account });
   };

   setWorker = async address => {
      const account = window.ethereum.selectedAddress;
      return await Escrow.methods.setWorker(address).send({ from: account });
   };

   prolongStake = async (index, periods) => {
      const account = window.ethereum.selectedAddress;
      return await Escrow.methods.prolongStake(index, periods).send({ from: account });
   };

   divideStake = async (index, value, periods) => {
      const account = window.ethereum.selectedAddress;
      const nits = utils.toWei(value, 'ether');
      return await Escrow.methods.divideStake(index, nits, periods).send({ from: account });
   };
}
