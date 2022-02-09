let rlSync = require('readline-sync');
function prompt(message) {
  console.log(`==> ${message}`);
}

prompt("Welcome to the calculator.");
prompt("What is the first number?");
let num1 = Number(rlSync.prompt());
prompt("What is the second number?");
let num2 = Number(rlSync.prompt());
prompt("What operation would you like to perform?\n1. Addition 2. Subtraction 3. Multiplication 4. Division")
let operation = rlSync.prompt();
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
prompt(`The output is ${output}.`);