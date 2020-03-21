import Web3 from "web3";

let shoto;
if (typeof window.ethereum !== 'undefined'){
    shoto = 'ok';
}
shoto = 'ne ok';
export default shoto;

// window.ethereum.enable();
// const web3 = new Web3(window.ethereum);

// let web3 = new Web3;
// const goerliUrl =
//   "https://goerli.infura.io/v3/388474bfcd7f44508aefa5b952227ddb";

// if (typeof window !== "undefined") {
//   // we are on the browser and metamask not installed
//   if (typeof window.web3 == "undefined") {
//     const provider = new Web3.providers.HttpProvider(goerliUrl);
//     web3 = new Web3(provider);
//     // console.log(web.version)
//     // metamask installed
//   } else {
   
//     web3 = new Web3(web3.currentProvider);
 
//   }
// } else {
//   // we are on the server or user do not have metamask
//   const provider = new Web3.providers.HttpProvider(goerliUrl);
//   web3 = new Web3(provider);
// }

// export default web3;
