// Nested the For Loop
// 1 Array - W

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(i, j);
//     }
// }

let n=3
for (let i = 0; i <= n; i++) {
    console.log("*  *")
    for (let j = i; j < (n+1); j++) {
        console.log(" * ");
    }
}