let readline = require('readline-sync');
let age = Number(readline.question("What is your age? "));
let retireAge = Number(readline.question("At what age would you like to retire? "));
console.log("");
let date = new Date();
let currentYear = date.getFullYear();
console.log(`It's ${currentYear}. You will retire in ${currentYear + retireAge - age}.`);
console.log(`You only have ${retireAge - age} years to go!`);