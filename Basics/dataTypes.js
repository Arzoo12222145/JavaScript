// let age = 21
// let name = "arzoo"
// let check = false
// let state = undefined
// let node = null

// number -> 2 to power 53
// string
// boolean
// null -> standalone unit
// undefined -> the variable hasn't yet been defined

// console.log(typeof state); // undefined
// console.log(typeof node); // object


// Primitive data types (Call by value)

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt 

// Reference (Non-Primitive)

// Array, Objects, Functions


// const s1 = Symbol('123');
// const s2 = Symbol('123');
// console.log(s1);
// console.log(s2);
// console.log(s1==s2);


// const heros = ["shaktiman","naagraj","harryPotter"];

// const obj = {
//     name: "Harry",
//     age : 21,
// }

// const myFunction = function(){
//     console.log("Hello");
// }
// myFunction();

// console.log(typeof(myFunction));
// console.log(typeof(heros));


//******************************************************************************** */

//Stack(Primitive data types) | Heap(Non Primitive data types)

let myname = "arzoo"

let anothername = myname
anothername = "bhuker"

console.log(myname);
console.log(anothername);


let userOne = {
    name : "arzuu",
    email: "abc@ybl"
}

let user = userOne.email;
console.log(user);
