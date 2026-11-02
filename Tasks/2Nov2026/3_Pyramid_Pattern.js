// Print a pyramid pattern using stars. 
// For input n, print n rows where row i has (n-i) leading spaces and (2*i-1) stars.
/*
Input
4
Output
   *
  ***
 *****
*******
*/

let n = 3;

for (let i = 1; i <= n; i++) {
    let row = ""
    for (let j = 1; j <= n-i; j++) {
        row += " ";
    }
    for (let k = 1; k <= 2*i-1; k++) {
        row = row + "*";
    }
    console.log(row);

}