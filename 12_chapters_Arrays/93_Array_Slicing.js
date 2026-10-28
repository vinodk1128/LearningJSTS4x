// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(1, 3)); // arr[1] to arr[3-1] i.e., arr[1] to arr[2] will be retained
console.log(arr);

console.log(arr.slice(2)); // since this method is unmutatble the original array is kept untouched

// console.log(arr.slice(-2));
// console.log(arr.slice(-3));

// console.log(arr.slice(0));

// console.log(arr.slice(-5));

console.log(arr.slice(-3,-5)); // slice always moves forward. here since -3 is > -5, o/p is []