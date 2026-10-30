// Write a JavaScript program to reverse a given string.

let str = "hello";
const trimmedStr = str.trim();
let reverseStr = "";

for (let i = trimmedStr.length-1; i >= 0; i--){
    reverseStr = reverseStr + trimmedStr.charAt(i);
}
console.log(reverseStr);