// Closure - realtime example

function maxRetryTracker(max){
    let attempts = 0;
    function tryAgain(testName){
        attempts++;
        if(attempts>max){
            return `${testName} testcase exceeded max retries of ${max}`;
        }
        return `Attempt ${attempts}/${max} for ${testName}`
    }
    return tryAgain;
}

let runTCretry = maxRetryTracker(3);

console.log(runTCretry("Login"));
console.log(runTCretry("Login"));
console.log(runTCretry("Login"));
console.log(runTCretry("Login"));


/*
When you call:
    let runTCretry = maxRetryTracker(3);
JavaScript sets the outer function’s parameter max to 3. 
While that call is running, it creates tryAgain, and tryAgain refers to max.
Because the returned function still needs max, JavaScript keeps the surrounding variable available after maxRetryTracker finishes. 
That retained access is part of the closure. So max is remembered as 3 when runTCretry is called later.
It’s not that 3 is copied into tryAgain as an argument. 
The function keeps access to the max variable from that particular call to maxRetryTracker.
If you create another tracker:
let retryFiveTimes = maxRetryTracker(5);
it gets a separate closure: retryFiveTimes remembers max as 5, with its own attempts counter.
*/


// CLOSURE IS RARELY USED IN AUTOMATION