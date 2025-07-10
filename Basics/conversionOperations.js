// let str = "33"
let str = "33abc"
console.log(typeof(str));

let num = Number(str);
console.log(typeof(num));
console.log(num);

// "33" -> 33
// "33abc" -> NaN (type = number)
// "arzoo" -> NaN (type=number)
// true -> 1, false -> 0