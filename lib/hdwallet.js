'use strict'
var bitcore = require('bitcore-lib');
var Mnemonic = require('bitcore-mnemonic');

var Wallet = exports.Wallet = function(key, network){
    this.network = network;
    this.xpriv = key;
}

Wallet.prototype.getMasterPublicKey = function(){
    return bitcore.HDPublicKey(this.xpriv).toString();
}

Wallet.prototype.getDerivedPublicKey = function(path){
    return bitcore.HDPublicKey(this.xpriv.derive(path)).toString();
}

Wallet.prototype.getMasterPrivateKey = function(){
    return this.xpriv.toString();
}

Wallet.prototype.getDerivedPrivateKey = function(path){
    return this.xpriv.derive(path).toString();
}

Wallet.prototype.getBitcoinKeyPair = function(derivePath){
    var prv = this.xpriv.derive(derivePath)
    return {
        wif: prv.privateKey.toWIF(),
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

