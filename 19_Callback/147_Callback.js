function placeOrder(item, callback){
    console.log("Placing an order");
    console.log("Order Placed", item);
    callback();
}


// // 1. First Way
// function CompleteOrderPrint(){
//     console.log("Normal Fn");
// }

// placeOrder("Burger", CompleteOrderPrint);


// // 2. Second Way Annomous
// placeOrder("Burger", function(){
//     console.log("Order is ready!, pick it up!");
// });


// 3. Third Way - Arrow Fn
placeOrder("Burger", () => {
    console.log("Arrow Fn, I am also a function wihtout name!")
});

test('has title', async ({ page }) => {});
// test(TITLE, CALLBACK-F(n));

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');
//   await expect(page).toHaveTitle(/Playwright/);
// });
