let rlSync = require('readline-sync');
let input = rlSync.question("What's your name? ");
if (input[input.length - 1] === "!") {
  console.log(`HI ${input.toUpperCase().slice(0, input.length - 1)}. WE ARE SCREAMING! `);
} else {
  console.log(`Hi ${input}.`);
}