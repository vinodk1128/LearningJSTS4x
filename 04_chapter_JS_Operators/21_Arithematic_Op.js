/*
Addition +
Subtration -
Division /
Multiplication *
Remainder % modulus operator
*/

// Arithmetic operators
let sum = 2 + 5;
let sub = 8 - 3;
let mul = 4 * 3;
let div = 10 / 2;

console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);


// Modulus operator % - gives remainder from division
let mod = 43 % 3;
console.log(mod); // 1

// To find odd or even we can make use of modulus operator, n % 2 == 0 then even

if (43 % 2 == 0){
    console.log("This is an even number")
} else {console.log("It is an odd number")}

// Exponential **

let a = 2, b = 4;
let ab = a ** b; // a^b which is 2^4 meaning 2 to power of 4
console.log(ab); // 16