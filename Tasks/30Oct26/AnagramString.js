// Write a program to check if two strings are anagrams of each other.

/*
Input: evil
        live
Output: YES
Both words contain the same letters
*/

let first = "evil";
let second = "live";

const normalize = (str) => str.toLowerCase().replace(/\s/g, "");

  const a = [...normalize(first)].sort().join("");
  const b = [...normalize(second)].sort().join("");

if(a===b){
    console.log("YES");
} else {
    console.log("NO");
}

// Complexity: O(n log n) time for sorting, O(n) extra space.
