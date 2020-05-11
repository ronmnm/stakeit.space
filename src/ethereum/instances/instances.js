import Web3 from 'web3';
import {abiDispatcher, abiManager, abiEscrow, abiToken, abiWorklock} from './contract-abis'

const goerliUrl = 'https://goerli.infura.io/v3/388474bfcd7f44508aefa5b952227ddb'
const web3 = new Web3(window.ethereum || goerliUrl);

// Dispatcher
const DISPATCHER_ADDRESS = abiDispatcher[2];
const DISPATCHER_ABI = abiDispatcher[3];
export const instanceDispatcher = new web3.eth.Contract(DISPATCHER_ABI, DISPATCHER_ADDRESS);

// Policy Manager
const POLICY_MANAGER_ADDRESS = '0x1A0bA37398f2476F533Ae2ab622A79E310AA7680';
const POLICY_MANAGER_ABI = abiManager[3];
export const instancePolicy = new web3.eth.Contract(POLICY_MANAGER_ABI, POLICY_MANAGER_ADDRESS);

// Staking escrow
// const STAKING_ESCROW_ADDRESSold = '0xdC098916291e1ef683A4f469fa32025c872194df';
const STAKING_ESCROW_ADDRESS = '0xAB51fBDd4Faf6c691884B3A9b475E34E2092aE81';
const STAKING_ESCROW_ABI = abiEscrow[3];
export const Escrow = new web3.eth.Contract(STAKING_ESCROW_ABI, STAKING_ESCROW_ADDRESS);

// Token
const TOKEN_ADDRESS = abiToken[2];
const TOKEN_ABI = abiToken[3];
export const Token = new web3.eth.Contract(TOKEN_ABI, TOKEN_ADDRESS);


// Worklock
export const WORKLOCK_ADDRESS = abiWorklock[2];
const WORKLOCK_ABI = abiWorklock[3];
export const Worklock = new web3.eth.Contract(WORKLOCK_ABI, WORKLOCK_ADDRESS);
