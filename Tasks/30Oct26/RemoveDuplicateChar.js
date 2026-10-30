// Write a program to remove duplicate characters from a string.
/*
let str = "programming ";
let trimmedStr = str.trim();
let finalString = "";

for(let i=0; i<trimmedStr.length; i++){
    if(!finalString.includes(trimmedStr.charAt(i))){
        finalString += trimmedStr.charAt(i);
    }
}
console.log(finalString);
*/
/*
Above code has issue:
- **Performance**: Using `includes()` in a loop creates O(n²) time complexity 
which is inefficient for long strings  
*/

let str = "programming ";
const seen = new Set();  //  Set() does not allow duplicate characters to be added.
let result = "";

for (const char of str.trim()) {
    if (!seen.has(char)) {
        seen.add(char);
        result += char;
    }
}
console.log(result);
// With a Set, lookup is typically O(1), so the overall time is O(n) and the extra space is O(k), 
// where k is the number of unique characters.