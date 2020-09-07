## Be safe with your crypto assets!

This application is a community maintained project.
We at NuCypher have every indication that this site was created by good people,
but we cannot feasibly ensure that the code running here and all
its dependencies are absolutely 100% safe.

As always - when interacting with web-based blockchain
applications, you the user are responsible for confirming
that your wallet and / or client are interacting with the correct contract.

Below are the only valid addresses for interacting with NuCypher at this time.
If this application attempts to interact with any other address, please drop what
you're doing and report it to security@nucypher.com and to our Discord.

~ NuCypher Team ~

###### NuCypher Mainnet Contracts

* [NuCypher Token - 0x4fE83213D56308330EC302a8BD641f1d0113A4Cc](https://etherscan.io/address/0x4fE83213D56308330EC302a8BD641f1d0113A4Cc)
* [WorkLock - 0xe9778e69a961e64d3cdbb34cf6778281d34667c2](https://etherscan.io/address/0xe9778e69a961e64d3cdbb34cf6778281d34667c2)
* [StakingEscrow (Dispatcher) - 0xbbD3C0C794F40c4f993B03F65343aCC6fcfCb2e2](https://etherscan.io/address/0xbbD3C0C794F40c4f993B03F65343aCC6fcfCb2e2)
* [PolicyManager (Dispatcher) - 0x67E4A942c067Ff25cE7705B69C318cA2Dfa54D64](https://etherscan.io/address/0x67E4A942c067Ff25cE7705B69C318cA2Dfa54D64)

## stakeit.space

User Interface for staking NU tokens.

## Run project locally

1. Clone repository and install dependencies:

```bash
$ git clone https://github.com/nucypher/stakeit.space.git
$ cd stakeit.space
$ npm install
```

2. Start the app on port 3000:

```bash
$ npm start
and navigate to http://localhost:3000/
```

## Production

```bash
npm build
```

Set `process.env.WEB3_PROVIDER_URI` on the host server as a fallback provider.

[![license](https://img.shields.io/pypi/l/nucypher.svg)](https://www.gnu.org/licenses/gpl-3.0.html)
