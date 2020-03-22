// import web3 from '../web3'


const abi = [
  "PolicyManager",
  "v2.2.1",
  "0x544B1a3E6281706414A2412CC8bd6E8257F352aB",
  [
    {
      "inputs": [
        {
          "internalType": "contract StakingEscrow",
          "name": "_escrow",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "ArrangementRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "min",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "max",
          "type": "uint256"
        }
      ],
      "name": "MinRewardRateRangeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "MinRewardRateSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "period",
          "type": "uint16"
        }
      ],
      "name": "NodeBrokenState",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sponsor",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "startTimestamp",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "endTimestamp",
          "type": "uint64"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "numberOfNodes",
          "type": "uint256"
        }
      ],
      "name": "PolicyCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "PolicyRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "RefundForArrangement",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes16",
          "name": "policyId",
          "type": "bytes16"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "RefundForPolicy",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "testTarget",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "StateVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "UpgradeFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "node",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "DEFAULT_REWARD_DELTA",
      "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "calculateRefundValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "calculateRefundValue",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        {
          "internalType": "address",
          "name": "_policyOwner",
          "type": "address"
        },
        {
          "internalType": "uint64",
          "name": "_endTimestamp",
          "type": "uint64"
        },
        { "internalType": "address[]", "name": "_nodes", "type": "address[]" }
      ],
      "name": "createPolicy",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "escrow",
      "outputs": [
        {
          "internalType": "contract StakingEscrow",
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_target", "type": "address" }
      ],
      "name": "finishUpgrade",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getArrangementInfo",
      "outputs": [
        { "internalType": "address", "name": "node", "type": "address" },
        {
          "internalType": "uint256",
          "name": "indexOfDowntimePeriods",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "lastRefundedPeriod",
          "type": "uint16"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "getArrangementsLength",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getCurrentPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "getMinRewardRate",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "getNodeRewardDelta",
      "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "getPolicyOwner",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "getRevocationHash",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "isUpgrade",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minRewardRateRange",
      "outputs": [
        { "internalType": "uint256", "name": "min", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        },
        { "internalType": "uint256", "name": "max", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "nodes",
      "outputs": [
        { "internalType": "uint256", "name": "reward", "type": "uint256" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "lastMinedPeriod",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "minRewardRate",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "bytes16", "name": "", "type": "bytes16" }
      ],
      "name": "policies",
      "outputs": [
        {
          "internalType": "address payable",
          "name": "sponsor",
          "type": "address"
        },
        { "internalType": "address", "name": "owner", "type": "address" },
        {
          "internalType": "uint256",
          "name": "rewardRate",
          "type": "uint256"
        },
        {
          "internalType": "uint64",
          "name": "startTimestamp",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "endTimestamp",
          "type": "uint64"
        },
        { "internalType": "bool", "name": "disabled", "type": "bool" },
        {
          "internalType": "uint256",
          "name": "reservedSlot1",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot2",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot3",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot4",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "reservedSlot5",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "previousTarget",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "refund",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "refund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "register",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "bytes", "name": "_signature", "type": "bytes" }
      ],
      "name": "revoke",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "revokeArrangement",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }
      ],
      "name": "revokePolicy",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "refundValue",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secondsPerPeriod",
      "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "secretHash",
      "outputs": [
        { "internalType": "bytes32", "name": "", "type": "bytes32" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "setDefaultRewardDelta",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_minRewardRate",
          "type": "uint256"
        }
      ],
      "name": "setMinRewardRate",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "uint256", "name": "_min", "type": "uint256" },
        { "internalType": "uint256", "name": "_default", "type": "uint256" },
        { "internalType": "uint256", "name": "_max", "type": "uint256" }
      ],
      "name": "setMinRewardRateRange",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "target",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "updateReward",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "_testTarget",
          "type": "address"
        }
      ],
      "name": "verifyState",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_recipient",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];

export const POLICY_MANAGER_ADDRESS = '0x1A0bA37398f2476F533Ae2ab622A79E310AA7680';
export const POLICY_MANAGER_ABI = abi[3];


// "Dispatcher",
//       "v0.0.0",
//       "0x1A0bA37398f2476F533Ae2ab622A79E310AA7680"




