let results = ["pass", "fail", "pass", "error", "fail"];

console.log(results.indexOf("fail")); //"fail" first appears at index 1 (the second element).
console.log(results.indexOf("skip"));  // "skip" isn’t in the array, so the result is -1.
console.log(results.indexOf("pass"));  // "pass" first appears at index 0 (the first element). There’s another "pass" later, but indexOf() returns only the first match.

// lastIndexOf — searches from the end
console.log(results.lastIndexOf("fail")); // last occurance and its index is returned

// includes — returns boolean
console.log(results.includes("error")); // true