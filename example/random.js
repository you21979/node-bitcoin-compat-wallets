var wallets = require('..');
var hdwallet = wallets.hdwallet;
var bitcoinj = wallets.bitcoinj;
var w1 = hdwallet.fromMnemonic("", "testnet");
console.log(w1.getMasterPrivateKey())
console.log(w1.getMasterPublicKey())
console.log(w1.getBitcoinKeyPair(function(key){return bitcoinj.derive(key,0,0)}))
console.log(w1.getBitcoinKeyPair(function(key){return bitcoinj.derive(key,0,1)}))
console.log(w1.getBitcoinKeyPair(function(key){return bitcoinj.derive(key,0,2)}))
console.log(w1.getBitcoinKeyPair(function(key){return bitcoinj.derive(key,0,3)}))

