let rlSync = require("readline-sync");
console.log("Welcome to the loan interest calculator.");
let principal = Number(rlSync.question("Please enter how much money your loan is for: $"));
while (!(principal >= 0)) {
  principal = Number(rlSync.question("Please enter a valid number, zero or greater: $"));
}
let apr = Number(rlSync.question("Please enter your Annual Percentage Rate. Eg. type \"5\" for 5%: ")) / 100;
while (!(apr > 0)) {
  apr = Number(rlSync.question("Please enter a valid Annual Percentage Rate, greater than zero. Eg. type \"5\" for 5%: ")) / 100;
}
let durationYears = Number(rlSync.question("Please enter the length of your loan, in years: "));
while (!(durationYears > 0)) {
  durationYears = Number(rlSync.question("Please enter a valid number, great than zeroo: "));
}
let monthlyRate = apr / 12;
let durationMonths = durationYears * 12;
let monthly = principal *
                    (monthlyRate /
                        (1 -
                          Math.pow((1 + monthlyRate), (-durationMonths))));
console.log(`Your monthly payment is $${monthly.toFixed(2)}.`);