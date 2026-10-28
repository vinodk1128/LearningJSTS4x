let nums = [10,1,21,2];
nums.sort((a,b) => a-b); // numbers sorted in numerical order
console.log(nums);
nums.sort((a,b) => b-a); // reverse order
console.log(nums);

let fruits = ['apple','banana',"cherry"];
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits);
// arrow Functions