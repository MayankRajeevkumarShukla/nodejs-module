function add(x, y){
    return x + y;
}
function sub(x,y) {
    return x - y;
}
// one way to exports the file
// module.exports ={ add, sub};
// another way to export the file
exports.add = add;
exports.sub = sub;