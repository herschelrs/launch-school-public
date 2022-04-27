const readline = require('readline-sync');

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {
      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };
  return Object.assign(playerObject, computerObject);
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper or scissors:');
        choice = readline.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
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

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
      this.human.wins += 1;
      console.log("You win!");
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
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
      this.human.choose();
      this.computer.choose();
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