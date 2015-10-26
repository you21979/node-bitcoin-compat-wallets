'use strict'
var derive_m_44h_0h_xh = exports.derive_m_44h_0h_xh = function(account){
    var purpose = 44;
    var coin_type = 0;
    return [
        'm',
        purpose.toString() + "'",
        coin_type.toString() + "'",
        account.toString() + "'"
    ].join('/')
}
var derive_m_44h_1h_xh = exports.derive_m_44h_1h_xh = function(account){
    var purpose = 44;
    var coin_type = 1;
    return [
        'm',
        purpose.toString() + "'",
        coin_type.toString() + "'",
        account.toString() + "'"
    ].join('/')
}
var derive_m_44h_0h_xh_x_x = exports.derive_m_44h_0h_xh_x_x = function(account, change, index){
    switch(change){
    case 0:
    case 1:
        break;
    default:
        throw new Error("unknown change type");
    }
    return [
        derive_m_44h_0h_xh(account),
        change.toString(),
        index.toString()
    ].join('/')
}
var derive_m_44h_1h_xh_x_x = exports.derive_m_44h_1h_xh_x_x = function(account, change, index){
    switch(change){
    case 0:
    case 1:
        break;
    default:
        throw new Error("unknown change type");
    }
    return [
        derive_m_44h_1h_xh(account),
        change.toString(),
        index.toString()
    ].join('/')
}

var derive_m_x_x = exports.derive_m_x_x = function(change, index){
    switch(change){
    case 0:
    case 1:
        break;
    default:
        throw new Error("unknown change type");
    }
    return [
        'm',
        change.toString(),
        index.toString()
    ].join('/')
}

var CHANGE = exports.CHANGE = {
    EXTERNAL_CHAIN:0,
    INTERNAL_CHAIN:1,
}
