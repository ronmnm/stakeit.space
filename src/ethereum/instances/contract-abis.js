export const abiToken = 
[
  "NuCypherToken",
  "v0.0.0",
  "0x78D591D90a4a768B9D2790deA465D472b6Fe0f18",
  [
    {
      "inputs": [
        { "internalType": "uint256", "name": "_totalSupplyOfTokens", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "address", "name": "spender", "type": "address" }
      ],
      "name": "allowance",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "approve",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_spender", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "bytes", "name": "_extraData", "type": "bytes" }
      ],
      "name": "approveAndCall",
      "outputs": [{ "internalType": "bool", "name": "success", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }],
      "name": "balanceOf",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }
      ],
      "name": "decreaseAllowance",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "spender", "type": "address" },
        { "internalType": "uint256", "name": "addedValue", "type": "uint256" }
      ],
      "name": "increaseAllowance",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "transfer",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "from", "type": "address" },
        { "internalType": "address", "name": "to", "type": "address" },
        { "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "transferFrom",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];
export const abiEscrow = 
[
  "StakingEscrow",
  "v5.4.3",
  "0x9d779740F6187F7603D3Da1130b02F64D5Ec25f9",
  [
    {
      "inputs": [
        { "internalType": "contract NuCypherToken", "name": "_token", "type": "address" },
        { "internalType": "uint32", "name": "_hoursPerPeriod", "type": "uint32" },
        { "internalType": "uint256", "name": "_issuanceDecayCoefficient", "type": "uint256" },
        { "internalType": "uint256", "name": "_lockDurationCoefficient1", "type": "uint256" },
        { "internalType": "uint256", "name": "_lockDurationCoefficient2", "type": "uint256" },
        { "internalType": "uint16", "name": "_maximumRewardedPeriods", "type": "uint16" },
        { "internalType": "uint256", "name": "_firstPhaseTotalSupply", "type": "uint256" },
        { "internalType": "uint256", "name": "_firstPhaseMaxIssuance", "type": "uint256" },
        { "internalType": "uint16", "name": "_minLockedPeriods", "type": "uint16" },
        { "internalType": "uint256", "name": "_minAllowableLockedTokens", "type": "uint256" },
        { "internalType": "uint256", "name": "_maxAllowableLockedTokens", "type": "uint256" },
        { "internalType": "uint16", "name": "_minWorkerPeriods", "type": "uint16" },
        { "internalType": "bool", "name": "_isTestContract", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": true, "internalType": "uint16", "name": "period", "type": "uint16" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "CommitmentMade",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" },
        { "indexed": false, "internalType": "uint16", "name": "periods", "type": "uint16" }
      ],
      "name": "Deposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "oldValue", "type": "uint256" },
        { "indexed": false, "internalType": "uint16", "name": "lastPeriod", "type": "uint16" },
        { "indexed": false, "internalType": "uint256", "name": "newValue", "type": "uint256" },
        { "indexed": false, "internalType": "uint16", "name": "periods", "type": "uint16" }
      ],
      "name": "Divided",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Donated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "reservedReward",
          "type": "uint256"
        }
      ],
      "name": "Initialized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" },
        { "indexed": false, "internalType": "uint16", "name": "firstPeriod", "type": "uint16" },
        { "indexed": false, "internalType": "uint16", "name": "periods", "type": "uint16" }
      ],
      "name": "Locked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value1", "type": "uint256" },
        { "indexed": false, "internalType": "uint256", "name": "value2", "type": "uint256" },
        { "indexed": false, "internalType": "uint16", "name": "lastPeriod", "type": "uint16" }
      ],
      "name": "Merged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": true, "internalType": "uint16", "name": "period", "type": "uint16" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Minted",
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
        { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" },
        { "indexed": false, "internalType": "uint16", "name": "lastPeriod", "type": "uint16" },
        { "indexed": false, "internalType": "uint16", "name": "periods", "type": "uint16" }
      ],
      "name": "Prolonged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        {
          "indexed": false,
          "internalType": "uint16",
          "name": "lockUntilPeriod",
          "type": "uint16"
        }
      ],
      "name": "ReStakeLocked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "bool", "name": "reStake", "type": "bool" }
      ],
      "name": "ReStakeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "penalty", "type": "uint256" },
        { "indexed": true, "internalType": "address", "name": "investigator", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "reward", "type": "uint256" }
      ],
      "name": "Slashed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "bool", "name": "snapshotsEnabled", "type": "bool" }
      ],
      "name": "SnapshotSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "testTarget", "type": "address" },
        { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "StateVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "target", "type": "address" },
        { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "UpgradeFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "bool", "name": "windDown", "type": "bool" }
      ],
      "name": "WindDownSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": false, "internalType": "bool", "name": "measureWork", "type": "bool" }
      ],
      "name": "WorkMeasurementSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "staker", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "worker", "type": "address" },
        { "indexed": true, "internalType": "uint16", "name": "startPeriod", "type": "uint16" }
      ],
      "name": "WorkerBonded",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_SUB_STAKES",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "adjudicator",
      "outputs": [
        { "internalType": "contract AdjudicatorInterface", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "balanceHistory",
      "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address[]", "name": "_stakers", "type": "address[]" },
        { "internalType": "uint256[]", "name": "_numberOfSubStakes", "type": "uint256[]" },
        { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" },
        { "internalType": "uint16[]", "name": "_periods", "type": "uint16[]" }
      ],
      "name": "batchDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_worker", "type": "address" }],
      "name": "bondWorker",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "commitToNextPeriod",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentMintingPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "currentPeriodSupply",
      "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_index", "type": "uint256" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" }
      ],
      "name": "depositAndIncrease",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "depositFromWorkLock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_index", "type": "uint256" },
        { "internalType": "uint256", "name": "_newValue", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "divideStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }],
      "name": "donate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "findIndexOfPastDowntime",
      "outputs": [{ "internalType": "uint256", "name": "index", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_target", "type": "address" }],
      "name": "finishUpgrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "firstPhaseMaxIssuance",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "firstPhaseTotalSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint16", "name": "_periods", "type": "uint16" },
        { "internalType": "uint256", "name": "_startIndex", "type": "uint256" },
        { "internalType": "uint256", "name": "_maxStakers", "type": "uint256" }
      ],
      "name": "getActiveStakers",
      "outputs": [
        { "internalType": "uint256", "name": "allLockedTokens", "type": "uint256" },
        { "internalType": "uint256[2][]", "name": "activeStakers", "type": "uint256[2][]" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getAllTokens",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getCompletedWork",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getFlags",
      "outputs": [
        { "internalType": "bool", "name": "windDown", "type": "bool" },
        { "internalType": "bool", "name": "reStake", "type": "bool" },
        { "internalType": "bool", "name": "measureWork", "type": "bool" },
        { "internalType": "bool", "name": "snapshots", "type": "bool" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getLastCommittedPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getLastPeriodOfSubStake",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "getLockedTokens",
      "outputs": [{ "internalType": "uint256", "name": "lockedValue", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getPastDowntime",
      "outputs": [
        { "internalType": "uint16", "name": "startPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "endPeriod", "type": "uint16" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getPastDowntimeLength",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getReservedReward",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getStakersLength",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getSubStakeInfo",
      "outputs": [
        { "internalType": "uint16", "name": "firstPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "lastPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "periods", "type": "uint16" },
        { "internalType": "uint128", "name": "lockedValue", "type": "uint128" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getSubStakesLength",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "getWorkerFromStaker",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_reservedReward", "type": "uint256" },
        { "internalType": "address", "name": "_sourceOfFunds", "type": "address" }
      ],
      "name": "initialize",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_staker", "type": "address" }],
      "name": "isReStakeLocked",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isTestContract",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isUpgrade",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "lockAndCreate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_index", "type": "uint256" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" }
      ],
      "name": "lockAndIncrease",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockDurationCoefficient1",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "lockDurationCoefficient2",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint16", "name": "_lockReStakeUntilPeriod", "type": "uint16" }
      ],
      "name": "lockReStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "name": "lockedPerPeriod",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxAllowableLockedTokens",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maximumRewardedPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_index1", "type": "uint256" },
        { "internalType": "uint256", "name": "_index2", "type": "uint256" }
      ],
      "name": "mergeStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minAllowableLockedTokens",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minLockedPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minWorkerPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "mintingCoefficient",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "policyManager",
      "outputs": [
        { "internalType": "contract PolicyManagerInterface", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "previousPeriodSupply",
      "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "previousTarget",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_index", "type": "uint256" },
        { "internalType": "uint16", "name": "_periods", "type": "uint16" }
      ],
      "name": "prolongStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_from", "type": "address" },
        { "internalType": "uint256", "name": "_value", "type": "uint256" },
        { "internalType": "address", "name": "_tokenContract", "type": "address" },
        { "internalType": "bytes", "name": "", "type": "bytes" }
      ],
      "name": "receiveApproval",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "secondsPerPeriod",
      "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract AdjudicatorInterface",
          "name": "_adjudicator",
          "type": "address"
        }
      ],
      "name": "setAdjudicator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "contract PolicyManagerInterface",
          "name": "_policyManager",
          "type": "address"
        }
      ],
      "name": "setPolicyManager",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bool", "name": "_reStake", "type": "bool" }],
      "name": "setReStake",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bool", "name": "_enableSnapshots", "type": "bool" }],
      "name": "setSnapshots",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bool", "name": "_windDown", "type": "bool" }],
      "name": "setWindDown",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "contract WorkLockInterface", "name": "_workLock", "type": "address" }
      ],
      "name": "setWorkLock",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "bool", "name": "_measureWork", "type": "bool" }
      ],
      "name": "setWorkMeasurement",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_staker", "type": "address" },
        { "internalType": "uint256", "name": "_penalty", "type": "uint256" },
        { "internalType": "address", "name": "_investigator", "type": "address" },
        { "internalType": "uint256", "name": "_reward", "type": "uint256" }
      ],
      "name": "slashStaker",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "stakerFromWorker",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "stakerInfo",
      "outputs": [
        { "internalType": "uint256", "name": "value", "type": "uint256" },
        { "internalType": "uint16", "name": "currentCommittedPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "nextCommittedPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "lastCommittedPeriod", "type": "uint16" },
        { "internalType": "uint16", "name": "lockReStakeUntilPeriod", "type": "uint16" },
        { "internalType": "uint256", "name": "completedWork", "type": "uint256" },
        { "internalType": "uint16", "name": "workerStartPeriod", "type": "uint16" },
        { "internalType": "address", "name": "worker", "type": "address" },
        { "internalType": "uint256", "name": "flags", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot1", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot2", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot3", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot4", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot5", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "stakers",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "supportsHistory",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [{ "internalType": "contract NuCypherToken", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_blockNumber", "type": "uint256" }],
      "name": "totalStakedAt",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_owner", "type": "address" },
        { "internalType": "uint256", "name": "_blockNumber", "type": "uint256" }
      ],
      "name": "totalStakedForAt",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [{ "internalType": "uint128", "name": "", "type": "uint128" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_testTarget", "type": "address" }],
      "name": "verifyState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "workLock",
      "outputs": [
        { "internalType": "contract WorkLockInterface", "name": "", "type": "address" }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
];

export const abiManager = 
[
  "PolicyManager",
  "v6.1.1",
  "0x72E5d40bc4Ec4391f6C36Ba68B33D8840af0941d",
  [
    {
      "inputs": [
        { "internalType": "contract StakingEscrow", "name": "_escrow", "type": "address" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes16", "name": "policyId", "type": "bytes16" },
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "node", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "ArrangementRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "min", "type": "uint256" },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "defaultValue",
          "type": "uint256"
        },
        { "indexed": false, "internalType": "uint256", "name": "max", "type": "uint256" }
      ],
      "name": "FeeRateRangeSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "node", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "MinFeeRateSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "node", "type": "address" },
        { "indexed": false, "internalType": "uint16", "name": "period", "type": "uint16" }
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
        { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes16", "name": "policyId", "type": "bytes16" },
        { "indexed": true, "internalType": "address", "name": "sponsor", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "feeRate", "type": "uint256" },
        {
          "indexed": false,
          "internalType": "uint64",
          "name": "startTimestamp",
          "type": "uint64"
        },
        { "indexed": false, "internalType": "uint64", "name": "endTimestamp", "type": "uint64" },
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
        { "indexed": true, "internalType": "bytes16", "name": "policyId", "type": "bytes16" },
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "PolicyRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes16", "name": "policyId", "type": "bytes16" },
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "node", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "RefundForArrangement",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "bytes16", "name": "policyId", "type": "bytes16" },
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "RefundForPolicy",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "testTarget", "type": "address" },
        { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "StateVerified",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "target", "type": "address" },
        { "indexed": false, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "UpgradeFinished",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "node", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_FEE_DELTA",
      "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "calculateRefundValue",
      "outputs": [{ "internalType": "uint256", "name": "refundValue", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }],
      "name": "calculateRefundValue",
      "outputs": [{ "internalType": "uint256", "name": "refundValue", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_policyOwner", "type": "address" },
        { "internalType": "uint64", "name": "_endTimestamp", "type": "uint64" },
        { "internalType": "address[]", "name": "_nodes", "type": "address[]" }
      ],
      "name": "createPolicy",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "escrow",
      "outputs": [{ "internalType": "contract StakingEscrow", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "feeRateRange",
      "outputs": [
        { "internalType": "uint128", "name": "min", "type": "uint128" },
        { "internalType": "uint128", "name": "defaultValue", "type": "uint128" },
        { "internalType": "uint128", "name": "max", "type": "uint128" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_target", "type": "address" }],
      "name": "finishUpgrade",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "uint256", "name": "_index", "type": "uint256" }
      ],
      "name": "getArrangementInfo",
      "outputs": [
        { "internalType": "address", "name": "node", "type": "address" },
        { "internalType": "uint256", "name": "indexOfDowntimePeriods", "type": "uint256" },
        { "internalType": "uint16", "name": "lastRefundedPeriod", "type": "uint16" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }],
      "name": "getArrangementsLength",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCurrentPeriod",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_node", "type": "address" }],
      "name": "getMinFeeRate",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "getNodeFeeDelta",
      "outputs": [{ "internalType": "int256", "name": "", "type": "int256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }],
      "name": "getPolicyOwner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "getRevocationHash",
      "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isUpgrade",
      "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "nodes",
      "outputs": [
        { "internalType": "uint128", "name": "fee", "type": "uint128" },
        { "internalType": "uint16", "name": "previousFeePeriod", "type": "uint16" },
        { "internalType": "uint256", "name": "feeRate", "type": "uint256" },
        { "internalType": "uint256", "name": "minFeeRate", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bytes16", "name": "", "type": "bytes16" }],
      "name": "policies",
      "outputs": [
        { "internalType": "bool", "name": "disabled", "type": "bool" },
        { "internalType": "address payable", "name": "sponsor", "type": "address" },
        { "internalType": "address", "name": "owner", "type": "address" },
        { "internalType": "uint128", "name": "feeRate", "type": "uint128" },
        { "internalType": "uint64", "name": "startTimestamp", "type": "uint64" },
        { "internalType": "uint64", "name": "endTimestamp", "type": "uint64" },
        { "internalType": "uint256", "name": "reservedSlot1", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot2", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot3", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot4", "type": "uint256" },
        { "internalType": "uint256", "name": "reservedSlot5", "type": "uint256" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "previousTarget",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "refund",
      "outputs": [{ "internalType": "uint256", "name": "refundValue", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }],
      "name": "refund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "register",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "bytes", "name": "_signature", "type": "bytes" }
      ],
      "name": "revoke",
      "outputs": [{ "internalType": "uint256", "name": "refundValue", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "bytes16", "name": "_policyId", "type": "bytes16" },
        { "internalType": "address", "name": "_node", "type": "address" }
      ],
      "name": "revokeArrangement",
      "outputs": [{ "internalType": "uint256", "name": "refundValue", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "bytes16", "name": "_policyId", "type": "bytes16" }],
      "name": "revokePolicy",
      "outputs": [{ "internalType": "uint256", "name": "refundValue", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "secondsPerPeriod",
      "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "setDefaultFeeDelta",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint128", "name": "_min", "type": "uint128" },
        { "internalType": "uint128", "name": "_default", "type": "uint128" },
        { "internalType": "uint128", "name": "_max", "type": "uint128" }
      ],
      "name": "setFeeRateRange",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_minFeeRate", "type": "uint256" }],
      "name": "setMinFeeRate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "target",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address", "name": "_node", "type": "address" },
        { "internalType": "uint16", "name": "_period", "type": "uint16" }
      ],
      "name": "updateFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_testTarget", "type": "address" }],
      "name": "verifyState",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address payable", "name": "_recipient", "type": "address" }],
      "name": "withdraw",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
];
export const abiWorklock = 
[
  "WorkLock",
  "v0.0.0",
  "0xb9EB79FdE9D1cd77d876ce52364a701944094166",
  [
    {
      "inputs": [
        { "internalType": "contract NuCypherToken", "name": "_token", "type": "address" },
        { "internalType": "contract StakingEscrow", "name": "_escrow", "type": "address" },
        { "internalType": "uint256", "name": "_startBidDate", "type": "uint256" },
        { "internalType": "uint256", "name": "_endBidDate", "type": "uint256" },
        { "internalType": "uint256", "name": "_endCancellationDate", "type": "uint256" },
        { "internalType": "uint256", "name": "_boostingRefund", "type": "uint256" },
        { "internalType": "uint16", "name": "_stakingPeriods", "type": "uint16" },
        { "internalType": "uint256", "name": "_minAllowedBid", "type": "uint256" }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "depositedETH", "type": "uint256" }
      ],
      "name": "Bid",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "startIndex", "type": "uint256" },
        { "indexed": false, "internalType": "uint256", "name": "endIndex", "type": "uint256" }
      ],
      "name": "BiddersChecked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Canceled",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
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
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "CompensationWithdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
      ],
      "name": "Deposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "bidder", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "refundETH", "type": "uint256" }
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
          "name": "previousOwner",
          "type": "address"
        },
        { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "refundETH", "type": "uint256" },
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
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" }
      ],
      "name": "Shutdown",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "SLOWING_REFUND",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bid",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "name": "bidders",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "bonusETHSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "boostingRefund",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "cancelBid",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "claim",
      "outputs": [{ "internalType": "uint256", "name": "claimedTokens", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "compensation",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endBidDate",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "endCancellationDate",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "escrow",
      "outputs": [{ "internalType": "contract StakingEscrow", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_ethAmount", "type": "uint256" }],
      "name": "ethToTokens",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_ethAmount", "type": "uint256" }],
      "name": "ethToWork",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "address payable[]", "name": "_biddersForRefund", "type": "address[]" }
      ],
      "name": "forceRefund",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_bidder", "type": "address" }],
      "name": "getAvailableRefund",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBiddersLength",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "_bidder", "type": "address" }],
      "name": "getRemainingWork",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isClaimingAvailable",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isOwner",
      "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxAllowableLockedTokens",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minAllowableLockedTokens",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "minAllowedBid",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "nextBidderToCheck",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "refund",
      "outputs": [{ "internalType": "uint256", "name": "refundETH", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "shutdown",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "stakingPeriods",
      "outputs": [{ "internalType": "uint16", "name": "", "type": "uint16" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startBidDate",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "token",
      "outputs": [{ "internalType": "contract NuCypherToken", "name": "", "type": "address" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_value", "type": "uint256" }],
      "name": "tokenDeposit",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "tokenSupply",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "uint256", "name": "_gasToSaveState", "type": "uint256" }],
      "name": "verifyBiddingCorrectness",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdrawCompensation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
      "name": "workInfo",
      "outputs": [
        { "internalType": "uint256", "name": "depositedETH", "type": "uint256" },
        { "internalType": "uint256", "name": "completedWork", "type": "uint256" },
        { "internalType": "bool", "name": "claimed", "type": "bool" },
        { "internalType": "uint128", "name": "index", "type": "uint128" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "_completedWork", "type": "uint256" },
        { "internalType": "uint256", "name": "_depositedETH", "type": "uint256" }
      ],
      "name": "workToETH",
      "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
      "stateMutability": "view",
      "type": "function"
    }
  ]
];