const Wallet = require('ethereumjs-wallet');
const keccak256=require('js-sha3').keccak256;
let wallet=Wallet.generate();
const pubKey = wallet.getPublicKey();

let public_key_hash = keccak256(pubKey);

let address = "0x"+public_key_hash.slice(-40);
console.log("Address:", address);