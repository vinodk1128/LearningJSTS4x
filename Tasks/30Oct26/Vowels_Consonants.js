// Write a program to count the number of vowels and consonants in a given string.

let entry = "Hel$lo W)0orld";

let letters = entry.replace(/[^a-z]/gi, "");
let vowelCounter = 0;
let consonantCounter = 0;

for(const char of letters){
    if("aeiou".includes(char.toLowerCase())){
        vowelCounter += 1;
    } else {
        consonantCounter += 1;
    }
}

console.log(`Vowels: ${vowelCounter}`);
console.log(`Consonants: ${consonantCounter}`);