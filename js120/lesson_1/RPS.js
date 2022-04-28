const readline = require('readline-sync');
const moves = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper']
};

function concatPretty(arr, lastWord = 'or') {
  return `${arr.slice(0, arr.length - 1).join(", ")} ${lastWord} ${arr[arr.length - 1]}`;
}

function bestMove(history) {
  let moveList = Object.keys(moves);
  if (history.length === 0) return null;
  let tally = {};
  for (let histMove of history) {
    for (let move in moves) {
      if (moves[move].includes(histMove)) {
        tally[move] = tally[move] ? tally[move] + 1 : 1;
      }
    }
  }
  let bestRank = Math.max(...Object.values(tally));
  let bestMoves = moveList.filter(x => tally[x] === bestRank);
  return bestMoves[Math.floor(Math.random() * bestMoves.length)];
}

console.log(bestMove('rock paper rock rock paper scissors spock'.split(' ')));

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {

    choose(choices, history) {
      let best = bestMove(history);
      if (!best) {
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      } else {
        this.move = bestMove(history);
      }
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose(choices) {
      let choice;

      while (true) {
        console.log(`Please choose ${concatPretty(choices)}:`);
        choice = readline.question();
        if (choices.includes(choice)) break;
        console.log("Sorry, that choice is not valid.");
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
    wins: 0,
    history: [],
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log("Welcome to my Rock Paper Scissors game!");
  },
  displayGoodbyeMessage() {
    console.log("Thanks for playing my game!");
  },
  displayWinner() {
    let humanMove = this.human.move;
    this.human.history.push(humanMove);
    let computerMove = this.computer.move;
    this.computer.history.push(computerMove);
    console.log(`You chose ${humanMove}.`);
    console.log(`The computer chose ${computerMove}.`);

    if (moves[humanMove].includes(computerMove)) {
      this.human.wins += 1;
      console.log("You win!");
    } else if (moves[computerMove].includes(humanMove)) {
      this.computer.wins += 1;
      console.log("Computer Wins!");
    } else {
      console.log("It was a tie.");
    }
  },
  playAgain() {
    console.log("Would you like to play again (y/n)");
    let answer = readline.question();
    return answer.toLowerCase()[0] === 'y';
  },
  isWinner() {
    return (this.human.wins === 5 || this.computer.wins === 5);
  },
  displayMatchWinner() {
    if (this.human.wins > this.computer.wins) {
      console.log("You got five points first, you win the match!");
    } else {
      console.log("The computer got five points first, you lost the match.");
    }
  },
  displayHistory() {
    console.log(`The computer played: ${concatPretty(this.computer.history, 'and')}.`);
    console.log(`You played: ${concatPretty(this.human.history, 'and')}`);
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose(Object.keys(moves));
      this.computer.choose(Object.keys(moves), this.human.history);
      this.displayWinner();
      this.displayGoodbyeMessage();
      if (this.isWinner()) {
        this.displayMatchWinner();
        break;
      }
      if (!this.playAgain()) break;
    }
    this.displayHistory();
  },
};

RPSGame.play();