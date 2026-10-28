// Destructing
let [first, second, third] = [10, 20, 30];

console.log(first);
console.log(second);
console.log(third);


let browsers = ["v8", "v8", "Spidermonkey", "Spidermonkey"];
let [Chrome, Brave, Zen, Firefox] = browsers;
let whichEngine = "Edge";

switch (whichEngine) {
    case "Chrome":
        console.log(`Engine used in ${whichEngine} is ${Chrome}`);
        break;
    case "Brave":
        console.log(`Engine used in ${whichEngine} is ${Brave}`);
        break;
    case "Zen":
        console.log(`Engine used in ${whichEngine} is ${Zen}`);
        break;
    case "Firefox":
        console.log(`Engine used in ${whichEngine} is ${Firefox}`);
        break;
    default:
        console.log(`${whichEngine} browser is not in the list.`);
}