{
    console.log(a);
    let a = 10;
}
// ReferenceError: Cannot access 'a' before initialization

// Enter Block
//  ↓
// a is created ✅
// if a -> var-> undefined
// if a -> let -> no value
// a has NO value yet ❌ 

// console.log(a) // Error TDZ (let, const), Var => undefined

// let a = 10;
//     ↓
// a = 10 ✅


// test2();    // ReferenceError: Cannot access 'a' before initialization
function test2 () {
    console.log("something running");
}

// Temprory Dead Zone
let a; // hoisting : we get ReferenceError
console.log(a);
a=10;  // It reaches TDZ when variable is assigned after its been called