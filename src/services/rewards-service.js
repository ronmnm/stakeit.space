import Web3 from "web3";
import { instancePolicy } from "../ethereum/instances/instances";
import { WORKLOCK_ADDRESS, WORKLOCK_ABI } from "../ethereum/instances/worklock";
const web3 = new Web3(window.ethereum);

const instanceWorklock = new web3.eth.Contract(WORKLOCK_ABI, WORKLOCK_ADDRESS);



export default class RewardsService {
   async getRewardsData() {
      const accounts = await web3.eth.getAccounts();

      const policyFee = await instancePolicy.methods
         .nodes(accounts[0])
         .call();
      const getAvailableRefund = web3.utils.fromWei(
         await instanceWorklock.methods
            .getAvailableRefund(accounts[0])
            .call(),
         "ether"
      );

      const res = {
         policyFee: policyFee[0],
         eth: getAvailableRefund
      };
      return res;
   }
}
