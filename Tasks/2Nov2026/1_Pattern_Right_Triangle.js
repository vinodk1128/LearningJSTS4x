// Print a right triangle pattern using stars. 
// For input n, print n rows where row i has i stars.

/*
Input
3
Output
*
**
***
*/

let nStars = 3;

for(let i=0; i<nStars; i++){
    for(let j=0; j<=i; j++){
        process.stdout.write("*"); 
    }
    console.log("");
}