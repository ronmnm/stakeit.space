
const abi =   [
  "WorkLock",
  "v0.0.0",
  "0x3ACBb734d2Cc0FDd366BC50f19aBf84C8E5C4822",
  [
    {
      "inputs": [
        {
          "internalType": "contract NuCypherToken",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "contract StakingEscrow",
          "name": "_escrow",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_startBidDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endBidDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_endCancellationDate",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_boostingRefund",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "_stakingPeriods",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_minAllowedBid",
          "type": "uint256"
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
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "depositedETH",
          "type": "uint256"
        }
      ],
      "name": "Bid",
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
          "name": "startIndex",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "endIndex",
          "type": "uint256"
        }
      ],
      "name": "BiddersChecked",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Canceled",
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
          "name": "claimedTokens",
          "type": "uint256"
        }
      ],
      "name": "Claimed",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "CompensationWithdrawn",
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
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Deposited",
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
          "indexed": true,
          "internalType": "address",
          "name": "bidder",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "refundETH",
          "type": "uint256"
        }
      ],
      "name": "ForceRefund",
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
          "name": "refundETH",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "completedWork",
          "type": "uint256"
        }
      ],
      "name": "Refund",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "SLOWING_REFUND",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "bid",
      "outputs": [],
      "payable": true,
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "name": "bidders",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "bonusETHSupply",
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
      "name": "boostingRefund",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "cancelBid",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "claim",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "claimedTokens",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "compensation",
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
      "name": "creator",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "endBidDate",
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
      "name": "endCancellationDate",
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
      "constant": true,
      "inputs": [
        { "internalType": "uint256", "name": "_ethAmount", "type": "uint256" }
      ],
      "name": "ethToTokens",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "uint256", "name": "_ethAmount", "type": "uint256" }
      ],
      "name": "ethToWork",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address payable[]",
          "name": "_biddersForRefund",
          "type": "address[]"
        }
      ],
      "name": "forceRefund",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_bidder", "type": "address" }
      ],
      "name": "getAvailableRefund",
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
      "name": "getBiddersLength",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "_bidder", "type": "address" }
      ],
      "name": "getRemainingWork",
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
      "name": "isClaimingAvailable",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "maxAllowableLockedTokens",
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
      "name": "minAllowableLockedTokens",
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
      "name": "minAllowedBid",
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
      "name": "nextBidderToCheck",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "refund",
      "outputs": [
        { "internalType": "uint256", "name": "refundETH", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "stakingPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "startBidDate",
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
      "name": "token",
      "outputs": [
        {
          "internalType": "contract NuCypherToken",
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
        { "internalType": "uint256", "name": "_value", "type": "uint256" }
      ],
      "name": "tokenDeposit",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "tokenSupply",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_gasToSaveState",
          "type": "uint256"
        }
      ],
      "name": "verifyBiddingCorrectness",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdrawCompensation",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        { "internalType": "address", "name": "", "type": "address" }
      ],
      "name": "workInfo",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "depositedETH",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "completedWork",
          "type": "uint256"
        },
        { "internalType": "bool", "name": "claimed", "type": "bool" },
        { "internalType": "uint128", "name": "index", "type": "uint128" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_completedWork",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_depositedETH",
          "type": "uint256"
        }
      ],
      "name": "workToETH",
      "outputs": [
        { "internalType": "uint256", "name": "", "type": "uint256" }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]
];

export const WORKLOCK_ADDRESS = abi[2];
export const WORKLOCK_ABI = abi[3];



