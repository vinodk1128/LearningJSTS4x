// ============================================================
// Topic: null vs undefined in JavaScript
// ============================================================

/*
  SIMPLE DEFINITIONS:

  undefined  ->  A variable exists, but it has not been assigned any value yet.
                 JavaScript itself sets this automatically.

  null       ->  A variable exists, but the developer explicitly assigns 
                "no value" or "empty".
                 It is intentional absence of any value.
*/

// 1. Undefined

let userName;
console.log(userName);
console.log(typeof userName);

/* output:
            undefined
            undefined
*/

function greet() {}
console.log(greet()); // undefined

// if assigned later and that variable is called after that
let x;
x = 10;
console.log(x); // 10

// 2. Null

let profilePic = null;
console.log(profilePic); // null
console.log(typeof profilePic); // object



