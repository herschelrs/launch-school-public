const readline = require('readline-sync');
const moves = {
  rock: ['lizard', 'scissors'],
  paper: ['spock', 'rock'],
  scissors: ['lizard', 'paper'],
  spock: ['rock', 'scissors'],
  lizard: ['spock', 'paper']
};

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose(choices) {
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
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
        console.log(`Please choose ${choices.slice(0, choices.length - 1)
          .join(", ")} or ${choices[choices.length - 1]}:`);
        choice = readline.question();
        if (choices.includes(choice)) break;
        console.log("Sorry, that choice is not valid.");
      }

      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createMove() {
  return {

  };
}

function createRule() {
  return {

  };
}

function compare(move1, move2) {

}

function createPlayer() {
  return {
    move: null,
    wins: 0,
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
    let computerMove = this.computer.move;
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

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose(Object.keys(moves));
      this.computer.choose(Object.keys(moves));
      this.displayWinner();
      this.displayGoodbyeMessage();
      if (this.isWinner()) {
        this.displayMatchWinner();
        break;
      }
      if (!this.playAgain()) break;
    }
  },
};

RPSGame.play();