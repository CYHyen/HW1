const Wallet = require('ethereumjs-wallet');
const wallet = Wallet.generate();

const privKey = wallet.getPrivateKey();

let wallet_another = Wallet.fromPrivateKey(privKey);
let KeyStoreFile = wallet_another.toV3String('nccu');
console.log(KeyStoreFile);