var derive = exports.derive = function(key, change, index){
    var account = 0;
    switch(change){
    case 0:
    case 1:
        break;
    default:
        throw new Error("unknown change type");
    }
    return key.derive(['m', account+"'"].join('/')).derive(['m',change,index].join('/'))
}


