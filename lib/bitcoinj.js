var derive_m_0h = exports.derive_m_0h = function(){
    var purpose = 0;
    return [
        'm',
        purpose.toString() + "'"
    ].join('/')
}
var derive_m_0h_x_x = exports.derive_m_0h_x_x = function(change, index){
    switch(change){
    case 0:
    case 1:
        break;
    default:
        throw new Error("unknown change type");
    }
    return [
        derive_m_0h(),
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
