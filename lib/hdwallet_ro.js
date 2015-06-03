var bitcore = require('bitcore');
var Mnemonic = require('bitcore-mnemonic');

var Wallet = exports.Wallet = function(key, network){
    this.network = network;
    this.xpub = key;
}

Wallet.prototype.getMasterPublicKey = function(){
    return this.xpub.toString();
}

// deriveFunc : function(key){return derive(key,account,index)})
Wallet.prototype.getBitcoinKeyPair = function(deriveFunc){
    var pub = deriveFunc(this.xpub);
    return {
        pub: pub.publicKey.toString(),
        address: new bitcore.Address(pub.publicKey, this.network).toString(),
    }
}

var fromXPub = exports.fromXPub = function(xpub, network){
    return new Wallet(bitcore.HDPublicKey.fromString(xpub), network);
}

