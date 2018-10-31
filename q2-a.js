const Wallet = require('ethereumjs-wallet');
const keccak256=require('js-sha3').keccak256;
let wallet=Wallet.generate();

let privatekey = keccak256(wallet.getPrivateKey());
let publickey = keccak256(wallet.getPublicKey());
console.log("Private key:", privatekey);
console.log("Public key", publickey);