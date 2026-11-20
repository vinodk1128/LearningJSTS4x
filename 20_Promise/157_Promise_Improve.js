function openBrowser(){
    return new Promise(function(resolve){
        resolve("Browser has been opened!");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

// Always the 1st argument is Success response and 2nd one is Failure response
function clickLogin() {
    return new Promise(function (resolve, reject) {
        reject("Logged in successfully");
    });
}

openBrowser().then((returnValueFromPromiseResolve)=>console.log("msg is ", returnValueFromPromiseResolve));

openBrowser()
    .then(function (msg) {
        console.log("Step 1", msg); // msg is coming from the functions defined above for resolve argument
        return goToLogin(); // this step returns the next function which returns a string 
        // and its used by the .then function
    }).then(function (msg) {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(function (msg) {
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(function (msg) {
        console.log("Step 4 :", msg);
    }).catch(function (error) {
        console.log("Error:", error);
    }).finally(function () {
        console.log("Done execution!");
    });


//----------------------- Promise takes a function that can have either success(resolve) or failure(reject)
function calc1(a, b){
    return new Promise((resolve)=>{
        let c = a*b
        resolve(c);
    })
}    

calc1(2, 3).then(
    (ans)=>{
        let finalAns = ans + (ans*(25/100));
        console.log(`
            Promise concepts are not used in Playwright
            This will be asked in interview just to know knowledge on the programming concepts

            For this demo code the output is : 
            ${finalAns}
            `);
        // console.log(finalAns);
        // console.log(ans);
    }
)