import Web3 from 'web3';
import {Token, Escrow} from '../ethereum/instances/instances';
import {hexToBytes} from '../utils/utils';

const web3 = new Web3(window.ethereum);

export const addNewStake = async (inputAmount, inputDuration) => {
   const account = window.ethereum.selectedAddress
   const amount = web3.utils.toWei(String(inputAmount), 'ether');
   const hex = web3.utils.numberToHex(inputDuration);
   // const duration = web3.utils.hexToBytes(hex)
   const duration = hexToBytes(hex);

   try {
      return await Token.methods
         .approveAndCall(Escrow.address, amount, duration)
         .send({ from: account });
   } catch (error) {
      console.log(error);
   }
};
