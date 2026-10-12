let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);

// Template Literal - Output string is defined within backtick and variables are passed within the backticks
console.log(`What is the SLA time ? - ${sla}`);
