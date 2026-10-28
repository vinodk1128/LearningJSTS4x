// Map and Filters


// every vs some

// every — ALL must pass
// console.log([80, 90, 85].every(i => i >= 70));
// console.log([80, 60, 85].every(i => i >= 70));


// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70));
console.log([80, 90, 85].some(s => s < 70)); // false


// every() and some() returns true/false
// .every()
let sMarks = [45, 63, 76, 35];
let finalResult = sMarks.every(m => m >= 35);
if (finalResult === true) {
    console.log(`Has everyone passed the exam : YES`);
} else console.log(`Has everyone passed the exam : NO`);

// .some()
let nums = [3,5,1,21,9];
// let isEven = nums.some(n => n%2===0);
if (nums.some(n => n%2===0)){
    console.log("Array contains even numbers.")
} else console.log("Array does not contain even numbers.")
