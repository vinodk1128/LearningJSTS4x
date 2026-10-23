let scores = [45, 82, 91, 60, 73];

// map → it maps each elements in array with the condition matching elements defined.
let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);

// Filter → Searches and takes out only those elements which satisfies the condition
let passing = scores.filter(s => s >= 70);
console.log(passing);