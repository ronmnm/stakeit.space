import Web3 from "web3";
import { instanceToken } from "../ethereum/instances/instances";

const web3 = new Web3(window.ethereum);
const dispatcher = '0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81'

export default class StakeService {
   getApproveAndCall() {
     

      const approveAndCall = async (inputAmount, inputDuration) => {
         const accounts = await web3.eth.getAccounts()


         const hexToBytesFixed = (hex) => {
            hex = hex.toString(16);
        
         
        
            hex = hex.replace(/^0x/i, '');
            hex = hex.length % 2 ? '0' + hex : hex;
        
            let bytes = [];
            for (let c = 0; c < hex.length; c += 2) {
                bytes.push(parseInt(hex.substr(c, 2), 16));
            }
        
            return bytes;
          }



         const hex = web3.utils.numberToHex('234')
         console.log(hex);
         const duration = hexToBytesFixed('0x000000ea')
         console.log(duration);
         console.log('duration', typeof inputDuration);
         // debugger;
         let arr = [4, 50]
         try {
            await instanceToken.methods.approveAndCall(dispatcher, 15000, duration)
            
               .send({from: accounts[0]})
            
         } catch (error) {
            console.log(error);
         }


         
         //  hexToBytesFixed(hex)




         
         
         
         
      }
      return approveAndCall;
   }
}
