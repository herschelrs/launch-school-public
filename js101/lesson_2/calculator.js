let rlSync = require('readline-sync');
function prompt(message) {
  console.log(`==> ${message}`);
}

function invalidNumber(num) {
  return isNaN(Number(num)) || num.trimStart() === "";
}

prompt("Welcome to the calculator.");

let run = true;
let answer;
while (run) {
  prompt("What is the first number?");
  let num1 = rlSync.question();
  while (invalidNumber(num1)) {
    prompt("That doesn't seem to be a valid number. Please enter another.");
    num1 = rlSync.question();
  }
  prompt("What is the second number?");
  let num2 = rlSync.question();
  while (invalidNumber(num2)) {
    prompt("That doesn't seem to be a valid number. Please enter another.");
    num2 = rlSync.question();
  }
  prompt("What operation would you like to perform?\n1. Addition 2. Subtraction 3. Multiplication 4. Division");
  let operation = rlSync.question();
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt("Must choose 1, 2, 3, or 4.");
    operation = rlSync.question();
  }
  let output;
  num1 = Number(num1);
  num2 = Number(num2);
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
  answer = rlSync.question("Would you like to run the calculator again? Type 'yes' for yes, any key for no. ");
  if (answer === "yes") {
    run = true;
  } else {
    run = false;
  }
}

