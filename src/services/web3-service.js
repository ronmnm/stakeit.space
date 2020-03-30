import Web3 from "web3";
import {
  instanceDispatcher,
  instancePolicy,
  instanceEscrow,
  instanceToken
} from "../ethereum/instances/instances";

const web3 = new Web3(window.ethereum);

export default class ServiceWeb3 {

  async getStakerBalAddr(){
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    // Get Nu balance
    const nuNitsBalance = await instanceToken.methods.balanceOf(account).call();
    const nuBalance = (parseFloat(nuNitsBalance) / 10 ** 18);
    // nodes (Policy fee)
    const policyFee = await instancePolicy.methods.nodes(account).call();

    const stakerData = {
      account: account,
      balanceNu: nuBalance,
      policyFee: policyFee
    }
    return stakerData;
  }
  

  getManageData = async () => {
    const stakerInfo = await this.getStakerBalAddr()
    const {balanceNu, account } = stakerInfo;
    // Get Staker ETH balance
    const balanceEth = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(account), 'ether')).toFixed(2);

    // get Worker address    Беру из StakerInfo
    // const workerAddr = await instanceEscrow.methods
    //   .getWorkerFromStaker(account).call();

    // Много данных беру от сюда, зарефакторить потом код вверху
    const StakerInfo = await instanceEscrow.methods
    .stakerInfo(account)
    .call();


    // get Worker balance ETH
    let workerBal;
    if(StakerInfo.worker !== '0x0000000000000000000000000000000000000000'){
      workerBal = parseFloat(web3.utils.fromWei(await web3.eth.getBalance(StakerInfo.worker), 'ether')).toFixed(2);
    } else {
      workerBal = 0;
    }

    // Get all tokens belonging to the staker
    // const allStakersNits = await instanceEscrow.methods
    //   .getAllTokens(account)
    //   .call();
    // const allStakersNu = (StakerInfo.value / 10**18).toFixed(0)

    // Get users locked tokens
    const lockedStakerNits = await instanceEscrow.methods
      .getLockedTokens(account, 0)
      .call();
    const lockedStakerNu = (lockedStakerNits / 10**18)
    // Calculate Stakers unlocked NU
    const stakerUnlockedNits = StakerInfo.value - lockedStakerNits;
    const stakerNuUnlocked = (stakerUnlockedNits / 10**18)
    // Checks if `reStake` parameter is available for changing
    const isReStakeLockedBool = await instanceEscrow.methods
      .isReStakeLocked(account)
      .call();
    let isRestakeLocked;
    if(isReStakeLockedBool){
      isRestakeLocked = "Locked"
    } else {
      isRestakeLocked = "Unlocked"
    }

    


    // get substake length by substake index
    const getSubStakesLength = await instanceEscrow.methods
      .getSubStakesLength(account)
      .call();


   
    const getAllSubstakes = await (async () => {
        if(getSubStakesLength !== "0"){
          let substakeList = [];
          for (let i = 0; i < getSubStakesLength; i++) {
            const list = await instanceEscrow.methods
              .getSubStakeInfo(account, i)
              .call();
            substakeList.push(list)
          }
          return substakeList;
        } else {
          let substakeList = null;
          return substakeList;
        }
        
      })();
     
    
    
    

    // const getAllSubstakes2 = await getAllSubstakes();


    // Create object to return
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
      substakeList: getAllSubstakes
      // StakerInfo: StakerInfo,
      // methods: await instanceEscrow.methods
      
      
      
    };
    return res;
  }

  getFooterData = async () => {
    // Get total supply
    const totalNuSupply = await instanceToken.methods.totalSupply().call();
    // Get Current Period
    const currentPeriod = await instanceEscrow.methods.getCurrentPeriod().call();
    // Get number of stakers (with inactive)
    // const getStakersLength = await instanceEscrow.methods.getStakersLength().call();
    // Get number of active stakers and locked amount
    const getStakersAndTokens = await instanceEscrow.methods.getActiveStakers(1, 0, 0).call();
    // Calculations
    const activeStakers = getStakersAndTokens[1].length;
    const lockedNu = (parseFloat(getStakersAndTokens[0]) /10 ** 18).toLocaleString("en-Us");
    const percentLocked = ( (getStakersAndTokens[0] / totalNuSupply) * 100).toFixed(2);
    // Create object to return
    const res = {
      totalNuSupply: totalNuSupply,
      currentPeriod: currentPeriod,
      // totalStakers: getStakersLength,
      activeStakers: activeStakers,
      lockedNu: lockedNu,
      percentLocked: percentLocked
    };
    return res;
  }

}
