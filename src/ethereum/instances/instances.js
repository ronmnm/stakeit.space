import Web3 from 'web3';
import {abiEscrow, abiManager, abiToken, abiWorklock} from './contract-abis'

const abiIndex = 3;  // registry index of ABI
const providerUri = process.env.WEB3_PROVIDER_URI
const web3 = new Web3(window.ethereum || providerUri);
window.ethereum.autoRefreshOnNetworkChange = false;


// PolicyManager
const POLICY_MANAGER_DISPATCHER_ADDRESS = '0x4db603E42E6798Ac534853AA2c0fF5618cb0ebE5';  // PM Dispatcher Address
const POLICY_MANAGER_ABI = abiManager[abiIndex];
export const instancePolicy = new web3.eth.Contract(POLICY_MANAGER_ABI, POLICY_MANAGER_DISPATCHER_ADDRESS);

// StakingEscrow
const STAKING_ESCROW_DISPATCHER_ADDRESS = '0x6A6F917a3FF3d33d26BB4743140F205486cD6B4B';  // SE Dispatcher Address
const STAKING_ESCROW_ABI = abiEscrow[abiIndex];
export const Escrow = new web3.eth.Contract(STAKING_ESCROW_ABI, STAKING_ESCROW_DISPATCHER_ADDRESS);
// console.log('Escrow.address', Escrow.address);

// Token
const TOKEN_ADDRESS = "0x78D591D90a4a768B9D2790deA465D472b6Fe0f18";
const TOKEN_ABI = abiToken[abiIndex];
export const Token = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);

// Worklock
export const WORKLOCK_ADDRESS = "0xb9EB79FdE9D1cd77d876ce52364a701944094166";
const WORKLOCK_ABI = abiWorklock[abiIndex];
export const Worklock = new web3.eth.Contract(WORKLOCK_ABI, WORKLOCK_ADDRESS);
