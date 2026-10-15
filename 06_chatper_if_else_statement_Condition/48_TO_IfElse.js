// Ternary operator vs if..else if


let age = 23;

// Ternary operator is used if one line statement is used
let going_goa = age > 18 ? (age > 26 ? "Go Goa, Can Drink!" : "Go Goa, but No Drinks!") : "No Goa";
console.log(going_goa);

// If else is used when multiple logical statements are to be used

if(age > 18){
    let price = 2000
    const TOTAL_PRICE = price+(25/100)*price;
    console.log("You can go Goa. And the price is", TOTAL_PRICE,"including GST of 25%");
    if(age > 26){
        let typeDrink = "Beer";
        console.log("Can drink", typeDrink);
    } else {
        let typeDrink = "Coca Cola";
        console.log("Can drink only", typeDrink);
    }
} else {
    console.log("You can not go Goa.");
}
