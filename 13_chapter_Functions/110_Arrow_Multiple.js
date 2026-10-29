//Mutiline
const getResult = (score) => {
    if (score > 70) return "Pass";
    return "fail";
}


console.log(getResult(78));
console.log(getResult(43));

const sslcResult = (marks) => marks > 35 ? "Congratulations! You have Passed the exam."
    : "You have failed. No worries, you can reapply for another exam.";

    console.log(sslcResult(46));
// if (sslcResult(43)==="PASS"){
//     console.log("Congratulations! You have Passed the exam.");
// } else console.log("You have failed. No worries, you can reapply for another exam.");
