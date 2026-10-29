function greet(name){
    return `Hello, ${name}`;
}

const greet2 = (name) => `Hello, ${name}`;

console.log(greet2); // [Function: greet2]
console.log(greet2()); // Hello, undefined
console.log(greet2("Vinod")); // Hello, Vinod