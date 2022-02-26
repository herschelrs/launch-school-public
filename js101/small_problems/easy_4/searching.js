let readline = require("readline-sync");
let arr = [];
arr.push(readline.question("Enter the 1st number: "));
arr.push(readline.question("Enter the 2nd number: "));
arr.push(readline.question("Enter the 3rd number: "));
arr.push(readline.question("Enter the 4th number: "));
arr.push(readline.question("Enter the 5th number: "));
let lastnum = readline.question("Enter the last number: ");
console.log("");
if (arr.includes(lastnum)) {
  console.log(`The number ${lastnum} appears in ${arr.join()}.`);
} else {
  console.log(`The number ${lastnum} does not appear in ${arr.join()}.`);
}