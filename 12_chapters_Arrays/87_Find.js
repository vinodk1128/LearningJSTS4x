let nums = [10,25,30,45];
let result = nums.find(temp => temp > 80); // returns first occurance of the element which satisfies the condition
console.log(result); // 25

// findIndex
let index = nums.findIndex(n => n > 20); // returns the index of 1st occorance of the element
console.log(index);

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3 


// find() method returns true on searching for the occurance of the element satisfying the condition
// If the element is not present then it returns undefined.