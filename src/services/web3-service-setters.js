import Web3 from "web3";
import {
  instanceDispatcher,
  instancePolicy,
  instanceEscrow,
  instanceToken
} from "../ethereum/instances/instances";

const web3 = new Web3(window.ethereum);

export default class ServiceWeb3Setters {

  async getSetters(){
    

    const setRestake = async (value) => {
      try {
        const accounts = await web3.eth.getAccounts();
        await instanceEscrow.methods
          .setReStake(value)
          .send({ from: accounts[0] });
      } catch (err) {
        console.error('blabla', err)
      }
    }

    const setWinddown = async (value) => {
      try {
        const accounts = await web3.eth.getAccounts();
        await instanceEscrow.methods
          .setWindDown(value)
          .send({ from: accounts[0] });
      } catch (err) {
        console.error('blabla', err)
      }
    }





    const setters = {
      setRestake: setRestake,
      setWinddown: setWinddown
    }
    return setters;
  }


}
