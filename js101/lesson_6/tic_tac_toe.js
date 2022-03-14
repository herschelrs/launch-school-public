const readline = require('readline-sync');
const INITIAL_MARKER = ' ';
const HUMAN_MARKER = 'X';
const COMPUTER_MARKER = 'O';
const winningLines = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
prompt("Would you like to play first? (y/n)");
const humanFirst = readline.question().trim().toLowerCase()[0];

function displayBoard(board) {
  console.clear();

  console.log(`Your marker is ${HUMAN_MARKER}, and the computer's is ${COMPUTER_MARKER}`);

  console.log('');
  console.log('     |     |  ');
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log('     |     |  ');
  console.log('-----+-----+-----');
  console.log('     |     |  ');
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log('     |     |  ');
  console.log('-----+-----+-----');
  console.log('     |     |  ');
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log('     |     |  ');
  console.log('');
}

function joinOr(list, delimiter = ', ', last = 'or') {
  if (list.length <= 1) {
    return list.join();
  } else {
    return list.slice(0, list.length - 1).join(delimiter)
      + delimiter + last + " " + list[list.length - 1];
  }
}

function initializeBoard() {
  let board = {};
  for (let square = 1; square <= 9; square += 1) {
    board[square] = INITIAL_MARKER;
  }
  return board;
}

function prompt(str) {
  console.log('=> ' + str);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`Choose a square (${joinOr(emptySquares(board))}):`);
    square = readline.question().trim();
    if (emptySquares(board).includes(square)) break;
    prompt("Invalid input.");
  }
  board[square] = HUMAN_MARKER;
}

function emptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARKER);
}

function playerNearWin(board, marker) {
  for (let line of winningLines) {
    let [a, b, c] = [board[line[0]], board[line[1]], board[line[2]]];
    if ([a, b, c].filter(x => x === marker).length === 2 &&
      [a ,b, c].filter(x => x === INITIAL_MARKER).length === 1) {
      return line.filter(x => board[x] === INITIAL_MARKER)[0];
    }
  }
  return 0;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
  let danger = playerNearWin(board, HUMAN_MARKER);
  let computerNearWin = playerNearWin(board, COMPUTER_MARKER);
  if (computerNearWin) {
    board[computerNearWin] = COMPUTER_MARKER;
  } else if (danger) {
    board[danger] = COMPUTER_MARKER;
  } else if (emptySquares(board).includes(5)) {
    board[5] = COMPUTER_MARKER;
  } else {
    let square = emptySquares(board)[randomIndex];
    board[square] = COMPUTER_MARKER;
  }
}

function chooseSquare(board, player) {
  if (player === "Human") {
    playerChoosesSquare(board);
  } else {
    computerChoosesSquare(board);
  }
}

function alternatePlayer(player) {
  if (player === "Human") {
    return "Computer";
  } else {
    return "Human";
  }
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

function detectWinner(board) {
  for (let line = 0; line < winningLines.length; line += 1) {
    let [sq1, sq2, sq3] = winningLines[line];
    // console.log(`${sq1} ${sq2} ${sq3}`)
    if (
      board[sq1] === HUMAN_MARKER && board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return 'Player';
    } else if (
      board[sq1] === COMPUTER_MARKER && board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return 'Computer';
    }
  }
  return null;
}

function playGame() {
  let board = initializeBoard();
  let currentPlayer = (humanFirst === "y") ? 'Human' : 'Computer';
  while (true) {
    displayBoard(board);
    chooseSquare(board, currentPlayer);
    currentPlayer = alternatePlayer(currentPlayer);
    if (someoneWon(board) || boardFull(board)) break;
  }
  displayBoard(board);
  if (someoneWon(board)) {
    prompt(`${detectWinner(board)} won!`);
    return detectWinner(board);
  } else {
    prompt("It's a tie!");
    return null;
  }
}

function playMatch() {
  let game = 1;
  let [playerWins, computerWins] = [0,0];
  while (true) {
    let winner = playGame();
    if (winner === "Player") {
      playerWins += 1;
    } else if (winner === 'Computer') {
      computerWins += 1;
    }
    if (playerWins > 2) {
      prompt("Player wins the match!");
      break;
    } else if (computerWins > 2) {
      prompt("Computer wins the match!");
      break;
    }
    if (playAgain('game')) break;
    game += 1;
  }
}

 

while (true) {
  playMatch();
  if (playAgain('match')) break;
}

// let board = initializeBoard();
// board[1] = HUMAN_MARKER;
// board[4] = HUMAN_MARKER;
// // board[2] = COMPUTER_MARKER;
// displayBoard(board);
// console.log(playerNearWin(board));