import Web3 from 'web3';
import {Token} from '../ethereum/instances/instances';
import {hexToBytes} from '../utils/utils';

const DISPATCHER_ADDRESS = '0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81';
const web3 = new Web3(window.ethereum);

export const addNewStake = async (inputAmount, inputDuration) => {
   const account = window.ethereum.selectedAddress
   const amount = web3.utils.toWei(String(inputAmount), 'ether');
   const hex = web3.utils.numberToHex(inputDuration);
   // const duration = web3.utils.hexToBytes(hex)
   const duration = hexToBytes(hex);

   try {
      return await Token.methods
         .approveAndCall(DISPATCHER_ADDRESS, amount, duration)
         .send({ from: account });
   } catch (error) {
      console.log(error);
   }
};
