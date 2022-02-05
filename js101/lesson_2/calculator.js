let rlSync = require('readline-sync');
console.log("Welcome to the calculator.");
let num1 = Number(rlSync.question("What is the first number?\n"));
let num2 = Number(rlSync.question("What is the second number?\n"));
let operation = rlSync.question("What operation would you like to perform?\n1. Addition 2. Subtraction 3. Multiplication 4. Division"\n);
let output;
switch (operation) {
  case "1":
    output = num1 + num2;
    break;
  case "2":
    output = num1 - num2;
    break;
  case "3":
    output = num1 * num2;
    break;
  case "4":
    output = num1 / num2;
    break;
}
console.log(`The output is ${output}.`);