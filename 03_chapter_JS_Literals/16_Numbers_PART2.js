/*
3. NUMERIC SEPARATORS (ES2021+)
*/

let million = 1_000_000;    // 1000000
let binarySep = 0b1010_0001;    // 161
let hexSep = 0xFF_FF;   // 65535

console.log(million);
console.log(binarySep);
console.log(hexSep);


/*
4. BIGINT - For arbitrarily large integers
*/

// Ways of defining Bigint
let big = 123456789012345678901234567890n; // 'n' at the end of the number denotes its bigint
let big2 = BigInt("123456789012345678901234567890");
let bigFromNum = BigInt(42);

console.log("BigInt literal:", big);
console.log("BigInt from string:", big2);
console.log("BigInt from number:", bigFromNum);
console.log("typeof BigInt:", typeof big); // "bigint"
