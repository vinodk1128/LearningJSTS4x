let apiCall = new Promise(function(resolve,reject){
           resolve({status : 200, body : "User Data"});
});
// Promise takes a callback function and 
// returns the successful and failure responses that a user defines
// First parameter is always a success and second is failure
// later .then and .catch is used to output successful and failure responses respectively

apiCall.then(function(response){
    console.log(response); 
});


let testRun = new Promise(function (resolve, reject) {
    reject("Assertion Failed");
});

testRun.then(function (data) { // Resolve
    console.log(data);
}).catch(function (error) { // Reject
    console.log(error);
});


//
let statusCheck = new Promise(function(done,progressFailed){
    if(true){
        done("Login test completed");
    }
    progressFailed("Test stopped in between");
})


statusCheck.then(function(test){
    console.log(test);
})