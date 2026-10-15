
// To use prompt-sync; we must have nodejs project
// npm init 
// npm i prompt-sync
// Now we can use the module

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a num : "));
console.log(`The number is ${num}`);
