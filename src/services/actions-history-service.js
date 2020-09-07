import Web3 from "web3"
import {Escrow} from "../ethereum/instances/instances"

const web3 = new Web3(window.ethereum)
const providerURI = "https://etherscan.io/tx/"

export default class GetActionHistory {
  async getActionHistory() {
    let account = (await web3.eth.getAccounts())[0]
    let startBlock = 10763456  // Token deployment block

    async function _getEventList(eventName, block) {
      let historyArray = await Escrow.getPastEvents(
        eventName,
        { filter: { staker: account }, fromBlock: block, toBlock: "latest" },
        (err, res) => err && console.log(err)
      )

      let res = historyArray.map(async item => ({
        ...item,
        link: providerURI + item.transactionHash,
        timestamp: (await web3.eth.getBlock(item.blockNumber)).timestamp,
      }))

      return await Promise.all(res)
    }


    return [
      ...(await _getEventList("Prolonged", startBlock)),
      ...(await _getEventList("WindDownSet", startBlock)),
      ...(await _getEventList("ReStakeSet", startBlock)),
      ...(await _getEventList("Withdrawn", startBlock)),
      ...(await _getEventList("Divided", startBlock)),
      ...(await _getEventList("WorkerBonded", startBlock)),
      ...(await _getEventList("Deposited", startBlock)),
    ].sort((a, b) => b.timestamp - a.timestamp)

  }
}
