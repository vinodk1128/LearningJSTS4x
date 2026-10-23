
console.log("Note: Please enter space after each sides length!");
const data = require('fs').readFileSync(0, 'utf8').trim();

let sidesTriangle = data.split(" ");

if (sidesTriangle.length !== 3) {
    console.log("Not a Triangle");
} else {
    let side1 = Number(sidesTriangle[0]);
    let side2 = Number(sidesTriangle[1]);
    let side3 = Number(sidesTriangle[2]);

    if (side1 + side2 < side3 || side2 + side3 < side1 || side3 + side1 < side2) {
        console.log("Sides do not form a Triangle");
    } else {

        if (side1 === side2 && side2 === side3) {
            console.log("Equilateral");
        } else if (side1 === side2 || side2 === side3 || side1 === side3) {
            console.log("Isosceles");
        } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
            console.log("Scalene");
        }
    }

}