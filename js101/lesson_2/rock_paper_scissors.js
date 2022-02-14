const readline = require("readline-sync");
const CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];
const SHORTENINGS = {r: "rock", p: "paper", sc: "scissors", l: "lizard", sp: "spock"};
const WINNING_PAIRS = {rock: ["lizard", "scissors"], paper: ["rock", "spock"],
  scissors: ["paper", "lizard"], spock: ["scissors", "rock"], lizard: ["spock", "paper"]};

function winningPlay(hand1, hand2) {
  //returns true if hand1 wins, false if hand2 wins
  if (WINNING_PAIRS[hand1].includes(hand2)) {
    return true;
  } else {
    return false;
  }
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, the computer chose ${computerChoice}.`);
  if (winningPlay(choice, computerChoice)) {
    prompt("You win!");
  } else if (choice === computerChoice) { //if winningPlay() returns false, we check if it's a tie first
    prompt("It's a tie!");
  } else {
    prompt("Computer wins!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}

let computerWins = 0;
let userWins = 0;

while (computerWins < 3 && userWins < 3) {
  prompt (`Choose one: ${Object.keys(SHORTENINGS).map(x => `${SHORTENINGS[x]} (${x})`).join(" ")}`);
  let choice = readline.question();

  while (!CHOICES.concat(Object.keys(SHORTENINGS)).includes(choice)) {
    prompt("That's not a valid choice, please enter again");
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * CHOICES.length);
  let computerChoice = CHOICES[randomIndex];
  if (choice.length <= 2) {
    choice = SHORTENINGS[choice];
  }

  displayWinner(choice, computerChoice);

  prompt("Do you want to play again (y/n)?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please type 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }

  if (winningPlay(choice, computerChoice)) {
    userWins += 1;
  } else if (winningPlay(computerChoice, choice)) {
    computerWins += 1;
  }

  if (answer[0] !== "y") break;
}

if (userWins > computerWins) {
  prompt(`You won best of five!`);
} else {
  prompt("Computer wins best of five!");
}

//console.log(`computer: ${computerWins}, user: ${userWins}`);