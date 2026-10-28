let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
let d = [...a,...b]; // it prints as an array by assigning the result into a new variable
console.log(d);

let e = [9,8,3];
console.log(...d,...e); // It does not print as a array. 1 2 3 4 9 8 3