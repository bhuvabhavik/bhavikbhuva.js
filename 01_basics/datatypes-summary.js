
/*
// # primitive

// 7 types: String, Number, boolean, Null, Undefined, Symbol, BigInt

Reference Type / Non primitive 
// Arrays , Objects, Functions

*/


const heros = ["shaktiman", "Naagraj", "chhota bheem"];

let myObj = {
    name : "Bhavik",
    age : 22
}; 

const myFunction = function() {
    console.log("Hello world, I am Function");
}

//*************MEMORY ******************************** */

// stack -> Primitive Types - copy of var
// heap -> Non Primitive Types - ref of original value

let herName = "Nobitadotcom"
let anotherName = herName
anotherName = "sizuki"

console.log(herName);
console.log(anotherName);


let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "bhavik@microsoft.com"

console.log(userOne.email); //bhavik@microsoft.com
console.log(userTwo.email); //bhavik@microsoft.com
//because of pass by reference in case of non primitive data types





