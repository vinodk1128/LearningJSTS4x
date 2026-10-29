function startBrowser() {
    let name = "edge";

    function installBrowser() {
        console.log(name);
    }

    return installBrowser;
}

const runTc = startBrowser();
runTc();

/*

A closure is a function that remembers variables from the place where it was created, 
even after that outer function has finished running.

*/

function makeCounter() {
  let count = 0;

  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// The returned function still has access to count. 
// That remembered access is the closure. 
// Closures are useful for keeping private state and for creating functions 
// that carry their own configuration.

