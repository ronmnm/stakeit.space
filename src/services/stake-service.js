import Web3 from "web3";
import { instanceToken } from "../ethereum/instances/instances";

const web3 = new Web3(window.ethereum);
const dispatcher = '0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81'

export default class StakeService {
   getApproveAndCall() {
     

      const approveAndCall = async (amount, duration) => {
         const accounts = await web3.eth.getAccounts()
         const hex = web3.utils.numberToHex(duration)
         try {
            await instanceToken.methods.approveAndCall(dispatcher, amount, duration)
               .send({from: accounts[0]})
         } catch (error) {
            
         }
         console.log(hex);
      }
      return approveAndCall;
   }
}
