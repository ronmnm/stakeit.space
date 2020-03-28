import web3 from '../web3'

const abi = [
  "Dispatcher",
  "v0.0.0",
  "0xdC098916291e1ef683A4f469fa32025c872194df",
  [
    {
      constant: true,
      inputs: [],
      name: "previousTarget",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [],
      name: "renounceOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isOwner",
      outputs: [{ name: "", type: "bool" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_target", type: "address" },
        { name: "_secret", type: "bytes" },
        { name: "_newSecretHash", type: "bytes32" }
      ],
      name: "upgrade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "_testTarget", type: "address" }],
      name: "verifyState",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "secretHash",
      outputs: [{ name: "", type: "bytes32" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "target",
      outputs: [{ name: "", type: "address" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: true,
      inputs: [],
      name: "isUpgrade",
      outputs: [{ name: "", type: "uint8" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "", type: "address" }],
      name: "finishUpgrade",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [{ name: "newOwner", type: "address" }],
      name: "transferOwnership",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      constant: false,
      inputs: [
        { name: "_secret", type: "bytes" },
        { name: "_newSecretHash", type: "bytes32" }
      ],
      name: "rollback",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
    },
    {
      inputs: [
        { name: "_target", type: "address" },
        { name: "_newSecretHash", type: "bytes32" }
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
    },
    { payable: true, stateMutability: "payable", type: "fallback" },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "owner", type: "address" }
      ],
      name: "Upgraded",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "from", type: "address" },
        { indexed: true, name: "to", type: "address" },
        { indexed: false, name: "owner", type: "address" }
      ],
      name: "RolledBack",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "testTarget", type: "address" },
        { indexed: false, name: "sender", type: "address" }
      ],
      name: "StateVerified",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "target", type: "address" },
        { indexed: false, name: "sender", type: "address" }
      ],
      name: "UpgradeFinished",
      type: "event"
    },
    {
      anonymous: false,
      inputs: [
        { indexed: true, name: "previousOwner", type: "address" },
        { indexed: true, name: "newOwner", type: "address" }
      ],
      name: "OwnershipTransferred",
      type: "event"
    }
  ]
];

const dispatcherAddress = abi[2];
const dispatcherAbi = abi[3];

const instanceDispatcher = new web3.eth.Contract(dispatcherAbi, dispatcherAddress);

export default instanceDispatcher;