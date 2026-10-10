// cold code:
// Cold code runs rarely, perhaps only during startup or in an unusual situation.
let age = 28;
console.log(age);

// Hot code:
//Hot code runs repeatedly or frequently, such as inside a loop or in response to many user actions.
for(let i=0; i<=10000; i++){
    console.log(i);
    callThisCode();
}

function callThisCode(){
    console.log("I am running.");
}

/*
Cold code does not run frequently, such as one-time test setup. 
Hot code runs repeatedly, such as a helper called for every test case or an operation inside a loop. 
In JavaScript, frequently executed code may be optimized by the JavaScript engine
*/