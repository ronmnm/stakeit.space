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
    const accounts = await web3.eth.getAccounts();
    const acc = accounts[0];
    
    // Set `windDown` parameter.
    const setWinddown = async (boolArg) => {
      await instanceEscrow.methods.setWindDown(boolArg).call()
    }

    const setters = {
      setWinddown: setWinddown
    }
    return setters;
  }


}
