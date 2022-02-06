let rlSync = require('readline-sync');
let num = Number(rlSync.question("Please enter an integer greater than 0: "));
let operation = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');
let output;
if (operation === "s") {
  output = 0;
  for (let i = 1; i <= num; i+= 1) {
    output += i;
  }
} else if (operation === "p") {
  output = 1;
  for (let i = 1; i <= num; i+= 1) {
    output *= i;
  }
} 
let printOperation = operation === "s" ? "sum" : "p" ? "product" : undefined
console.log("");
console.log(`The ${printOperation} of the integers between 1 and ${num} is ${output}.`);