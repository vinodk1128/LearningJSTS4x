let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i=0;i< testMatrix.length;i++){
    // console.log(testMatrix[i]); // [ 'login', 'pass', 200 ] → It will print the full row
    for(let j=0;j< testMatrix[i].length;j++){  // testMatrix[i].length is the number of elements in that row
        process.stdout.write(testMatrix[i][j]+" ");  // testMatrix[i][j] => testMatrix[0][0]
    }
    console.log("");
}

console.log(" --------- ");