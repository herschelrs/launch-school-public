let rlSync = require('readline-sync');
let bill = rlSync.question("What is the bill? ");
let percentage = rlSync.question("What is the tip percentage? ");
console.log("")
console.log(`The tip is $${(bill * percentage / 100).toFixed(2)}`);
console.log(`The total is $${(bill * (1 + (percentage/100))).toFixed(2)}`);