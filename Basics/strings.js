// let myname = "arzoo"
// let cnt = 99
// console.log(myname+cnt +"value");

// console.log(`My name is ${myname} and my value is ${cnt}`); //String interpolation->way to insert variables or expressions directly into a string using template literals (backticks `), instead of using concatenation

const game = new String('arzoobhuker')

console.log(game[0]);
console.log(game.length);
console.log(game.toUpperCase());
console.log(game.charAt(3));
console.log(game.indexOf('b'));

const newStr = game.substring(1,4);
console.log(newStr);

const newStr1 = game.substring(-8,4);
console.log(newStr1);