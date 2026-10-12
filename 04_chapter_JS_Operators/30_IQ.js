let env = "staging";

let baseUrl = 
    env === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com"; 

    // since env is not prod hence condition returns false and second statement is executed.

console.log(baseUrl); // https://staging-api.example.com

