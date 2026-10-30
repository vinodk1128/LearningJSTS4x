// Write a program to check if a given string is a palindrome (reads the same forwards and backwards).

let str = "madam";
let strTrimed= str.trim();
let rev = "";

if (strTrimed === "") {
    console.log("Invalid string!");
} else {

    for (let i = strTrimed.length - 1; i>= 0; i--) {
        rev = rev + strTrimed.charAt(i);
    }
    if (strTrimed === rev) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}