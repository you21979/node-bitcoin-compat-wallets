var bitcore = require('bitcore');
var Mnemonic = require('bitcore-mnemonic');

var Wallet = exports.Wallet = function(key, network){
    this.network = network;
    this.xpub = key;
}

Wallet.prototype.getPublicKey = function(){
    return this.xpub.toString();
}

Wallet.prototype.getBitcoinKeyPair = function(derivePath){
    var pub = this.xpub.derive(derivePath);
    return {
        pub: pub.publicKey.toString(),
        address: new bitcore.Address(pub.publicKey, this.network).toString(),
    }
}

var fromXPub = exports.fromXPub = function(xpub, network){
    return new Wallet(bitcore.HDPublicKey.fromString(xpub), network);
}

