// Print a left-aligned triangle pattern. For input n, print n rows in reverse order.
/*
Input
4
Output
****
***
**
*
*/

let nStars = 5;

for (let i=nStars; i>0; i--){
    for(let j=1; j<=i; j++){
        process.stdout.write("*"); 
    }
    console.log("");
}