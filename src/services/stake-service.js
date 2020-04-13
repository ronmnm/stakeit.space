import Web3 from "web3";
import { Token } from "../ethereum/instances/instances";

const web3 = new Web3(window.ethereum);
const DISPATCHER = "0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81";

export default class StakeService {

   _hexToBytes(hex) {
      hex = hex.toString(16);

      hex = hex.replace(/^0x/i, "");
      hex = hex.length % 2 ? "0" + hex : hex;

      let bytes = [];
      for (let c = 0; c < hex.length; c += 2) {
         bytes.push(parseInt(hex.substr(c, 2), 16));
      }

      return bytes;
   }

   getApproveAndCall() {

      const approveAndCall = async (inputAmount, inputDuration) => {

         const accounts = await web3.eth.getAccounts();
         const amount = web3.utils.toWei(inputAmount, "ether");
         const hex = web3.utils.numberToHex(inputDuration);
         const duration = this._hexToBytes(hex);


         try {
            await Token.methods
               .approveAndCall(DISPATCHER, amount, duration)
               .send({ from: accounts[0] });
         } catch (error) {
            console.log(error);
         }
      };
      return approveAndCall;
   }
}
