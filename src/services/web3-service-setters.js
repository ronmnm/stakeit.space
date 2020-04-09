import Web3 from "web3";
import { instanceEscrow } from "../ethereum/instances/instances";

const web3 = new Web3(window.ethereum);

export default class ServiceWeb3Setters {
   async getSetters() {
      console.log(instanceEscrow.methods);
      const setters = {};
      setters.setRestake = async (value) => {
         try {
            const accounts = await web3.eth.getAccounts();
            await instanceEscrow.methods
               .setReStake(value)
               .send({ from: accounts[0] });
         } catch (err) {
            console.error("Oh no", err);
         }
      };

      setters.setWinddown = async (value) => {
         try {
            const accounts = await web3.eth.getAccounts();
            await instanceEscrow.methods
               .setWindDown(value)
               .send({ from: accounts[0] });
         } catch (err) {
            console.error("Oh no", err);
         }
      };

      setters.setWorker = async (address) => {
         try {
            const accounts = await web3.eth.getAccounts();
            await instanceEscrow.methods
               .setWorker(address)
               .send({ from: accounts[0] });
         } catch (err) {
            console.error("Oh no", err);
         }
      };

      setters.prolongStake = async (index, periods) => {
         try {
            const accounts = await web3.eth.getAccounts();
            await instanceEscrow.methods
               .prolongStake(index, periods)
               .send({ from: accounts[0] });
         } catch (err) {
            console.error("Oh no", err);
         }
      };

      setters.divideStake = async (index, value, periods) => {
         try {
            const accounts = await web3.eth.getAccounts();
            
            const nits = web3.utils.toWei(value, 'ether')
            // console.log(typeof nits);
            // console.log(nits);

            await instanceEscrow.methods
               .divideStake(index, nits, periods)
               .send({ from: accounts[0] });
         } catch (err) {
            console.error("Oh no", err);
         }
      };

      return setters;
   }
}
