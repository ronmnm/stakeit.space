import Web3 from 'web3';
import {abiManager, abiEscrow, abiToken, abiWorklock} from './contract-abis'

const providerUri = 'https://mainnet.infura.io/v3/d596a1f7aec940cab578b15d864781db'
const web3 = new Web3(window.ethereum || providerUri);

// Policy Manager
const POLICY_MANAGER_ADDRESS = '0x67E4A942c067Ff25cE7705B69C318cA2Dfa54D64';  // PM Dispatcher Address
const POLICY_MANAGER_ABI = abiManager[3];
export const instancePolicy = new web3.eth.Contract(POLICY_MANAGER_ABI, POLICY_MANAGER_ADDRESS);

// Staking escrow
const STAKING_ESCROW_ADDRESS = '0xbbD3C0C794F40c4f993B03F65343aCC6fcfCb2e2';  // SE Dispatcher Address
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
