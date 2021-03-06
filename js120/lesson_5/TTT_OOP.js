const readline = require('readline-sync');

function joinOr(arr, delimiter = ', ', lastWord = 'or') {
  return `${arr.slice(0, arr.length - 1).join(delimiter)} ${lastWord} ${arr[arr.length - 1]}`;
}

function requestInput(requestPrompt, ...validInputs) {
  console.log(requestPrompt + ` (${joinOr(validInputs)})`);
  let answer;
  while (true) {
    answer = readline.question().toLowerCase()[0];
    if (!validInputs.includes(answer)) {
      console.log("Sorry, that's not a valid input. Please choose one of the options: " + `${joinOr(validInputs)}`);
    } else {
      break;
    }
  }
  return answer;
}

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }

  getMarker() {
    return this.marker;
  }

  isUnused() {
    return this.marker === Square.UNUSED_SQUARE;
  }
}

class Board {
  constructor() {
    this.initialize();
  }

  initialize() {
    this.squares = {};
    for (let counter = 1; counter <= 9; ++counter) {
      this.squares[String(counter)] = new Square();
    }
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }

  display() {
    console.log('');
    console.log("     |     |");
    console.log(`  ${this.squares[1]}  |  ${this.squares[2]}  |  ${this.squares[3]}`);
    console.log("     |     |");
    console.log('-----+-----+-----');
    console.log("     |     |");
    console.log(`  ${this.squares[4]}  |  ${this.squares[5]}  |  ${this.squares[6]}`);
    console.log("     |     |");
    console.log('-----+-----+-----');
    console.log("     |     |");
    console.log(`  ${this.squares[7]}  |  ${this.squares[8]}  |  ${this.squares[9]}`);
    console.log("     |     |");
    console.log('');
  }

  displayWithClear() {
    console.clear();
    console.log("");
    console.log("");
    this.display();
  }

  unusedSquares() {
    let keys = Object.keys(this.squares);
    return keys.filter(key => this.squares[key].isUnused());
  }

  isFull() {
    return this.unusedSquares().length === 0;
  }

  countMarkersFor(player, keys) {
    let markers = keys.filter(key => {
      return this.squares[key].getMarker() === player.getMarker();
    });

    return markers.length;
  }

  almostWon(rows, player, neutralMarker) {
    let marker = player.getMarker();
    for (let row of rows) {
      let rowValues = row.map(x => this.squares[x].toString());
      let isDangerous = (rowValues.filter(y => y === marker).length === 2 &&
        rowValues.filter(z => z === neutralMarker));
      if (isDangerous) {
        console.log("foo");
        for (let key of row) {
          if (this.squares[key].toString() === neutralMarker) {
            return key;
          }
        }
      }
    }
    return 0;
  }
}

class Player {
  constructor(marker) {
    this.marker = marker;
    this.score = 0;
  }

  getMarker() {
    return this.marker;
  }

  incrementScore() {
    this.score += 1;
  }

}

class Human extends Player {
  constructor() {
    super(Square.HUMAN_MARKER);
  }
}

class Computer extends Player {
  constructor() {
    super(Square.COMPUTER_MARKER);
  }
}

class TTTGame {
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
    this.gamesPlayed = 0;
  }

  static POSSIBLE_WINNING_ROWS = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
  ];

  static MATCH_GOAL = 3;

  randomMove() {
    let choice;
    let validChoices = this.board.unusedSquares();
    do {
      choice = Math.floor((9 * Math.random()) + 1).toString();
    } while (!validChoices.includes(choice));
    return choice;
  }

  play() {
    this.displayWelcomeMessage();
    this.board.display();
    while (true) {
      this.playOnce();
      if (this.isMatchWinner()) {
        break;
      } else if (!requestInput("Would you like to play again?", 'y', 'n')) {
        break;
      } else {
        this.board.initialize();
        this.board.displayWithClear();
      }
    }
    this.displayMatchWinner();
    this.displayGoodbyeMessage();
  }

  playOnce() {
    while (true) {
      if (this.gamesPlayed % 2 === 0) {
        this.humanMoves();
        if (this.gameOver()) break;
        this.computerMoves();
        if (this.gameOver()) break;

        this.board.displayWithClear();
      } else {
        this.computerMoves();
        if (this.gameOver()) break;

        this.board.displayWithClear();

        this.humanMoves();
        if (this.gameOver()) break;
      }
    }
    this.board.displayWithClear();
    this.displayResults();
    this.gamesPlayed += 1;
  }

  humanMoves() {
    let choice;

    while (true) {
      let validChoices = this.board.unusedSquares();
      const prompt = `Choose a square (${joinOr(validChoices)}): `;
      choice = readline.question(prompt);

      if (validChoices.includes(choice)) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }

    this.board.markSquareAt(choice, this.human.getMarker());
  }

  computerMoves() {
    let choice;
    let computerAlmostWon = this.board.almostWon(TTTGame.POSSIBLE_WINNING_ROWS,
      this.computer, Square.UNUSED_SQUARE);
    let humanAlmostWon = this.board.almostWon(TTTGame.POSSIBLE_WINNING_ROWS,
      this.human, Square.UNUSED_SQUARE);

    if (computerAlmostWon) {
      choice = computerAlmostWon;
    } else if (humanAlmostWon) {
      choice = humanAlmostWon;
    } else if (this.board.squares[5].toString() === Square.UNUSED_SQUARE) {
      choice = 5;
    } else {
      choice = this.randomMove();
    }
    this.board.markSquareAt(choice, this.computer.getMarker());
  }

  displayWelcomeMessage() {
    console.clear();
    console.log("Welcome to Tic Tac Toe!");
    console.log("");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing, bye!");
  }

  displayResults() {
    if (this.isWinner(this.human)) {
      console.log("You win!");
      this.human.incrementScore();
    } else if (this.isWinner(this.computer)) {
      console.log("Computer Wins! Silly human!");
      this.computer.incrementScore();
    } else {
      console.log("Tie...");
    }
  }

  isWinner(player) {
    return TTTGame.POSSIBLE_WINNING_ROWS.some(row => {
      return this.board.countMarkersFor(player, row) === 3;
    });
  }

  gameOver() {
    return this.board.isFull() || this.someoneWon();
  }

  someoneWon() {
    return this.isWinner(this.human) || this.isWinner(this.computer);
  }

  isMatchWinner() {
    if (this.human.score === TTTGame.MATCH_GOAL) {
      return this.human;
    } else if (this.computer.score === TTTGame.MATCH_GOAL) {
      return this.computer;
    } else {
      return false;
    }
  }

  displayMatchWinner() {
    let winner = this.isMatchWinner();
    debugger;
    if (winner === this.human) {
      console.log("You won best of three!");
    } else {
      console.log("Computer won best of three, hyooomahhnn");
    }
  }
}

let game = new TTTGame();
game.play();