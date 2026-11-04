// Synchronous callback

let testResults = ["PASS", "FAIL", "PASS", "PASS"];

testResults.forEach(function(result, atIndex){
    console.log(`Test at ${atIndex} is ${result}`);
})

/*––––––––––––––––––––––––––––––––––––*/
// Asynchronous callback

console.log("————————");
console.log("Test - 1 started running");
// Inbuilt function - setTimeout(Handler, timemSec)
setTimeout(function(){
    console.log("Test - 2 Its is still running");
},2000);

console.log("Test - 3 Testing is about to stop.");

/*––––––––––––––––––––––––––––––––––––*/
console.log();
console.log("———————CALLBACK HELL———————")
// Real QA Scenario: E2E Login Flow app.vwo.com

function openBrowser(callback){
    console.log("opening the browser");
    setTimeout(function () {
        console.log("Step 1 - browser starting...");
        callback();
    }, 500);
}

function goToLoginPage(callback) {
    setTimeout(function () {
        console.log("Step 2: Login page loaded");
        callback();
    }, 500);
}

function enterCredentials(callback) {
    setTimeout(function () {
        console.log("Step 3: Credentials entered");
        callback();
    }, 500);
}

function clickLogin(callback) {
    setTimeout(function () {
        console.log("Step 4: Login button clicked");
        callback();
    }, 500);
}

// // THIS IS CALLBACK HELL 👇
openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("Test is Complete!")
            })
        })
    })
})