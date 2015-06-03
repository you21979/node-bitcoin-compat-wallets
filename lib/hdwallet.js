var bitcore = require('bitcore');
var Mnemonic = require('bitcore-mnemonic');

var Wallet = exports.Wallet = function(key, network){
    this.network = network;
    this.xpriv = key;
}

Wallet.prototype.getMasterPublicKey = function(){
    return bitcore.HDPublicKey(this.xpriv).toString();
}

Wallet.prototype.getMasterPrivateKey = function(){
    return this.xpriv.toString();
}

// deriveFunc : function(key){return derive(key,account,index)})
Wallet.prototype.getBitcoinKeyPair = function(deriveFunc){
    var prv = deriveFunc(this.xpriv);
    return {
        prv: prv.privateKey.toString(),
        pub: prv.publicKey.toString(),
        address: new bitcore.Address(prv.publicKey, this.network).toString(),
    }
}

var fromMnemonic = exports.fromMnemonic = function(password, network){
    var mne = new Mnemonic(password, Mnemonic.Words.ENGLISH);
    var key = mne.toHDPrivateKey(null, network);
    return new Wallet(key, network);
}

var fromXPrv = exports.fromXPrv = function(xprv, network){
    return new Wallet(bitcore.HDPrivateKey.fromString(xprv), network);
}

