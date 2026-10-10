/*
    5. Special numeric values
*/

// Infinity

console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity
console.log("1 / 0:", 1/0); // 1 / 0: Infinity
console.log("-1 / 0:", -1/0); // -1 / 0: -Infinity
console.log(typeof Infinity); // number

// NaN (Not a Number) - result of invalid math

console.log("0 / 0:", 0/0); // 0 / 0: NaN
console.log('"a string" / 2:' , "a string" / 2);  // "a string" / 2: NaN
console.log('"a string" * 2:' , "a string" * 2);  // "a string" * 2: NaN
console.log("NaN is :", NaN);  // NaN is : NaN
console.log(typeof NaN);  // number
