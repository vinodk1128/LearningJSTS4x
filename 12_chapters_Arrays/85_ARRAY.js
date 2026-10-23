let browser = ['chrome', 'firefox', 'opera', 'safari', 'edge'];
console.log(browser.length); // 5

browser.pop(); // removes last element
console.log(browser);  // [ 'chrome', 'firefox', 'safari', 'opera' ]

let removed = browser.shift(); // shifts elements to left by removing the first element. Returns removed element
console.log(removed); // chrome

console.log(browser); // [ 'firefox', 'safari', 'opera' ]

for (let i = 0; i < browser.length; i++) { // iterates through array [ 'firefox', 'opera', 'safari' ]
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesn't support Automation Now!");
        break;
    }
}