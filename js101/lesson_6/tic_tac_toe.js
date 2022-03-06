const readline = require('readline-sync');

function displayBoard() {
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

function initializeBoard() {
  return {1: ' ', 2: ' ', 3: ' ', 4: ' ', 5: ' ', 6: ' ', 7: ' ', 8: ' ', 9: ' ',};
}

function prompt(str) {
  console.log('==> ' + str);
  let square = readline.question();
  board[square] = 'X';
}

function playerChoosesSquare(board) {
  prompt('Choose a square (1-9):');
  let square = readline
}

let board = initializeBoard();


displayBoard(board);