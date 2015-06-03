var wallets = require('..');
var hdwallet = wallets.hdwallet;
var j = wallets.bitcoinj;
var w1 = hdwallet.fromMnemonic("", "testnet");
console.log(w1.getMasterPrivateKey())
console.log(w1.getDerivedPrivateKey(j.derive_m_0h()))
console.log(w1.getMasterPublicKey())
console.log(w1.getDerivedPublicKey(j.derive_m_0h()))
var i = 0;
console.log(w1.getBitcoinKeyPair(j.derive_m_0h_x_x(0,i++)))
console.log(w1.getBitcoinKeyPair(j.derive_m_0h_x_x(0,i++)))
console.log(w1.getBitcoinKeyPair(j.derive_m_0h_x_x(0,i++)))
console.log(w1.getBitcoinKeyPair(j.derive_m_0h_x_x(0,i++)))
console.log(w1.getBitcoinKeyPair(j.derive_m_0h_x_x(0,i++)))

