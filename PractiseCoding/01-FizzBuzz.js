const data = require('fs').readFileSync(0, 'utf8');

const num = Number(data.trim());
for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
     }
    else {console.log(i)}
}

/*
OUTPUT:
    15
        1
        2
        Fizz
        4
        Buzz
        Fizz
        7
        8
        Fizz
        Buzz
        11
        Fizz
        13
        14
        FizzBuzz

*/

// optimized code
const data = require('fs').readFileSync(0, 'utf8');
const num = Number(data.trim());

const output = [];

for (let i = 1; i <= num; i++) {
  if (i % 15 === 0) output.push('FizzBuzz');
  else if (i % 3 === 0) output.push('Fizz');
  else if (i % 5 === 0) output.push('Buzz');
  else output.push(String(i));
}

process.stdout.write(output.join('\n'));
