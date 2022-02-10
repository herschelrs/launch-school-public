let rlSync = require("readline-sync");
let noun = rlSync.question("Please enter a noun. ");
let verb = rlSync.question("Please enter a verb. ");
let adjective = rlSync.question("Please enter an adjective. ");
let adverb = rlSync.question("Please enter an adverb. ");

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);