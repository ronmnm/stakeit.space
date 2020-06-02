import Web3 from "web3"
import { Escrow } from "../ethereum/instances/instances"

const web3 = new Web3(window.ethereum)
const goerliUrl = "https://goerli.etherscan.io/tx/"

export default class GetActionHistory {
  async getActionHistory() {
    let account = (await web3.eth.getAccounts())[0]
    let startBlock = 2404577


    async function _getEventList(eventName, block) {
      let historyArray = await Escrow.getPastEvents(
        eventName,
        { filter: { staker: account }, fromBlock: block, toBlock: "latest" },
        (err, res) => err && console.log(err)
      )

      let res = historyArray.map(async item => ({
        ...item,
        link: goerliUrl + item.transactionHash,
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
    ].sort((a, b) => b.timestamp - a.timestamp)

  }
}
