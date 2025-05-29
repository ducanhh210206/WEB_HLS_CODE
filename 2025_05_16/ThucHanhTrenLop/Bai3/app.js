var array = new Array(1,2,3,4);
alert(array.length);
// Kết quả: 4

var arr = new Array(1,2,3,4,5)
console.log(arr.join('-'));
// Kết quả: 1-2-3-4-5

var arr_1 = new Array(1,2,3,4,5);
var arr_2 = new Array(6,7,8);
console.log(arr_1.concat(arr_2));
// Kết quả: 1,2,3,4,5,6,7,8

var arr_1 = new Array(1,2,3,4,5);
console.log(arr_1.slice(1,3));
// Kết quả: [2,3]

var arr_1 = new Array(1,2,3,4,5);
console.log(arr_1.reverse());
// Kết quả: [5,4,3,2,1]

var arr_1 = new Array(5,2,1,3,8);
console.log(arr_1.sort());
// Kết quả: [1,2,3,5,8]

var arr_1 = new Array(5,2,1,3,8);
arr_1.push(10,12);
console.log(arr_1)
// Kết quả: [5,2,1,3,8,10,12]

var arr_1 = new Array(5,2,1,3,8);
arr_1.pop();
console.log(arr_1)
// Kết quả: [5,2,1,3]

var arr_1 = new Array(5,2,1,3,8);
arr_1.unshift(10,12);
console.log(arr_1)
// Kết quả: [10,12,5,2,1,3,8]

var arr_1 = new Array(5,2,1,3,8);
arr_1.shift();
console.log(arr_1)
// Kết quả: [2,1,3,8]
