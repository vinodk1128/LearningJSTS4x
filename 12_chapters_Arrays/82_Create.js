
let browsers = ["Chrome", "Firefox", "Safari"]; // This is the most used format for declaring an array

let scores = new Array(3);  // creates [empty x 3]
scores[0] = "1";  // Adding element to array

let snum = new Array("sneha"); // if string is inside bracket then it creates a array with length 1 and element as sneha
console.log(snum); // [ 'sneha' ]

let scores2 = new Array(1, 2, 3);

let numbers = new Array(100, 200, 300, 400);

// Array.of()
let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);

// Array.from() ; this is used to convert String to Characters
let chars = Array.from("hello");
console.log(chars); // extracts characters from the string and forms an array of characters
// ["h", "e", "l", "l", "o"] 