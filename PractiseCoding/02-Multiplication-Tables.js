const data = require('fs').readFileSync(0, 'utf8');

const num = Number(data.trim());
if (num != 0 && num >0) {
    for (let n = 1; n <= 10; n++){
        // let result = num * n;
        console.log(`${num} x ${n} = ${num*n}`);
    }
}

/*
 *
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50 
 */