// var: can be declared again and updated
var score = 10;
var score = 20; // Allowed
console.log(score); // 20

// let: can be updated, but not declared again in the same scope
let age = 18;
age = 19; // Allowed
// let age = 20; // Error

// const: cannot be reassigned
const name = "Maya";
// name = "Ravi"; // Error

console.log(age);  // 19
console.log(name); // Maya // word name is deprecated, its not allowed to use it as global variable.
function tryName(){
    const name = "Shreya";
    console.log(name); // name word can be used as a local variable
}

// use const when the value should not be reassigned, let when it should. 
// var is older and is usually avoided in modern JavaScript.
