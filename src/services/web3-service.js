import Web3 from 'web3';
import { Escrow, Token, instancePolicy } from '../ethereum/instances/instances';

const web3 = new Web3(window.ethereum);

export default class ServiceWeb3 {
   async getStakerBalAddr() {
      let stakerData = {};

      stakerData.account = (await web3.eth.getAccounts())[0];

      stakerData.network = window.ethereum.networkVersion;

      const nits = await Token.methods.balanceOf(stakerData.account).call();
      stakerData.balanceNu = parseFloat(nits) / 10 ** 18;

      const policyFee = await instancePolicy.methods
         .nodes(stakerData.account)
         .call();

      console.log(policyFee);
      return stakerData;
      
   }

   getManageData = async () => {
      const stakerInfo = await this.getStakerBalAddr();
      const { balanceNu, account } = stakerInfo;

      const balanceEth = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(account), 'ether')).toFixed(2);

      const StakerInfo = await Escrow.methods.stakerInfo(account).call();
      const currentPeriod = Math.floor(Date.now() / 86400000);

      const confirmedPeriod1 = +StakerInfo.confirmedPeriod1 === currentPeriod + 1 ? 'Next period confirmed' : 'Missing confirmation';

      let workerBal;
      if (StakerInfo.worker !== '0x0000000000000000000000000000000000000000') {
         workerBal = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(StakerInfo.worker), 'ether')).toFixed(2);
      } else {
         workerBal = 0;
      }

      // Get users locked tokens
      const lockedStakerNits = await Escrow.methods.getLockedTokens(account, 0).call();
      const lockedStakerNu = lockedStakerNits / 10 ** 18;
      // Calculate Stakers unlocked NU
      const stakerUnlockedNits = StakerInfo.value - lockedStakerNits;
      const stakerNuUnlocked = stakerUnlockedNits / 10 ** 18;

      const isReStakeLockedBool = await Escrow.methods.isReStakeLocked(account).call();
      const isRestakeLocked = isReStakeLockedBool ? 'Locked' : 'Unlocked';


      // get substake length by substake index
      const getSubStakesLength = await Escrow.methods.getSubStakesLength(account).call();

      // getting an array with all substakes
      const getAllSubstakes = await (async () => {
         if (getSubStakesLength !== '0') {
            let substakeList = [];
            for (let i = 0; i < getSubStakesLength; i++) {
               let list = await Escrow.methods.getSubStakeInfo(account, i).call();
               list.id = i.toString();
               substakeList.push(list);
            }
            return substakeList;
         } else {
            let substakeList = null;
            return substakeList;
         }
      })();

      const res = {
         stakerBalEth: balanceEth,
         stakersNuAll: StakerInfo.value,
         stakerNuLocked: lockedStakerNu,
         stakerNuBal: balanceNu,
         stakerNuUnlocked: stakerNuUnlocked,
         workerEthBal: workerBal,
         staker: account,
         worker: StakerInfo.worker,
         status: isRestakeLocked,
         windDown: StakerInfo.windDown,
         reStakeDisabled: StakerInfo.reStakeDisabled,
         subStakesLength: getSubStakesLength,
         substakeList: getAllSubstakes,
         StakerInfo: StakerInfo,
         confirmedPeriod1: confirmedPeriod1
      };

      return res;
   };

   getFooterData = async () => {
      const footer = {};

      footer.currentPeriod = Math.floor(Date.now() / 86400000);

      footer.totalNuSupply = await Token.methods
         .totalSupply()
         .call();

      footer.supplyInBln = (footer.totalNuSupply / 10 ** 18 / 10 ** 9)
         .toFixed(2);

      footer.getReservedReward = await Escrow.methods
         .getReservedReward()
         .call();

      // Get number of active stakers and locked amount
      footer.getStakersAndTokens = await Escrow.methods
         .getActiveStakers(1, 0, 0)
         .call();

      footer.activeStakers = footer.getStakersAndTokens[1].length;

      footer.lockedNu = (parseFloat(footer.getStakersAndTokens[0]) / 10 ** 18)
         .toLocaleString('en-Us');

      footer.percentLocked = ((footer.getStakersAndTokens[0] / (footer.totalNuSupply - footer.getReservedReward)) * 100)
         .toFixed(2);

      footer.circulatingSupply = ((footer.totalNuSupply - footer.getReservedReward) / 10 ** 18 / 10 ** 9)
         .toFixed(3);

      return footer;

      // Get number of stakers (with inactive)
      // const getStakersLength = await instanceEscrow.methods.getStakersLength().call();
   };
}
