// Write a program to check if two strings are anagrams of each other.

/*
Input: evil
        live
Output: YES
Both words contain the same letters
*/

let first = "evil";
let second = "lived";

if (first.length !== second.length) { console.log("NO"); }
else {
    const normalize = (str) => str.toLowerCase().replace(/\s/g, "");

    const a = [...normalize(first)].sort().join("");
    const b = [...normalize(second)].sort().join("");

    console.log(a === b ? "YES" : "NO");

}
// Complexity: O(n log n) time for sorting, O(n) extra space.
