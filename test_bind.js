function list(tile) {
    console.log('fun list: '+tile);
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

var tile=5;
// Create a function with a preset leading argument
// new fun the first argument is tile
var leadingThirtysevenList = list.bind(this, tile);

var list2 = leadingThirtysevenList();
console.log('list2:'+list2.toString());
// [37]


var arg=6;
// new fun first argument is still tile,
// dont make mistake , arg is not first argument
var list3 = leadingThirtysevenList(arg, 2, 3);
// [37, 1, 2, 3]
console.log('list3: '+list3.toString());