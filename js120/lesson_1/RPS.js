const readline = require('readline-sync');

function createPlayer(playerType) {
  return {
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {
        let choice;

        while (true) {
          console.log('Please choose rock, paper or scissors:');
          choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice)) break;
          console.log("Sorry, that choice is not valid.");
        }

        this.move = choice;
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * choices.length);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    }
  };
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

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log("Welcome to my Rock Paper Scissors game!");
  },
  displayGoodbyeMessage() {
    console.log("thanks for playing my game!");
  },
  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;
    console.log(`You chose ${humanMove}.`);
    console.log(`The computer chose ${computerMove}.`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
        (humanMove === 'paper' && computerMove === 'rock') ||
        (humanMove === 'scissors' && computerMove === 'paper')) {
          console.log("You win!");
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
    (humanMove === 'paper' && computerMove === 'scissors') ||
    (humanMove === 'scissors' && computerMove === 'rock')) {
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

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      this.displayGoodbyeMessage();
      if (!this.playAgain()) break;
    }
  },
};

RPSGame.play();