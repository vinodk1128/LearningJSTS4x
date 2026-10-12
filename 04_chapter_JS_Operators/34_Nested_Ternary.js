// Nested ternary will have multiple conditions

let age = 26;

let allowed_to_drink = age >=18 ? (age > 26 ? "Can drink." : "Can not drink") : "No Eligible";
// 26 is not greater than 26 hence false statement is executed
console.log(`Person is allowed and ${allowed_to_drink}`); // Person is allowed and Can not drink
