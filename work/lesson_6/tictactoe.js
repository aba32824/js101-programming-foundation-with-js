/**
 * 
 * Tic Tac Toe is a 2-player game played on a 3x3 grid called the board.
 * Each player takes a turn and marks a square on the board. The first player
 * to get 3 squares in a row–horizontal, vertical, or diagonal–wins.
 * If all 9 squares are filled and neither player has 3 in a row,
 * the game is a tie.
 * 
 */

const readline = require('readline-sync');

// Board and cell (AKA square) settings
const BOARD = {
  rowA: { rowId: 'A', cells: [] },
  rowB: { rowId: 'B', cells: [] },
  rowC: { rowId: 'C', cells: [] }
};
const CELL = {
  hasMark: false,
  mark: undefined,
  player: null,
  cellId: 0
};

// Players
const PC_PLAYER = {
  name: "computer",
  mark: "X"
};
const HUMAN_PLAYER = {
  name: "you",
  mark: "0"
};

function initBoard() {
  Object.keys(BOARD).forEach(row => {
    for (let i = 1; i <= 3; i++) {
      let cell = JSON.parse(JSON.stringify(CELL));
      cell.cellId = i;
      BOARD[row]['cells'].push(cell);
    }
  });
}

function resetBoard() {
  Object.keys(BOARD).forEach(row => {
    BOARD[row]['cells'].length = 0;
  });
}

function getValidRowIds() {
  return Object.values(BOARD).map(row => row.rowId);
}

function getValidCellIds() {
  return Array.from({length: Object.keys(BOARD).length}, (_, i) => i + 1);
}

function displayEmptyBoard() {
  let rowBorder = '+' + '-'.repeat(3);
  let rowSection = '|' + ' '.repeat(3);

  // getting Board's row and cell IDs to  display them to the player
  let rowIds = getValidRowIds();
  let cellIds = getValidCellIds();
  // just an empty line
  console.log();
  // to display cell IDs
  console.log(' '.repeat(5) + cellIds.join(' | '));
  // to display the empty board and row IDs
  for (let i = 0; i < 3; i++) {
    console.log(' '.repeat(3) + rowBorder.repeat(3) + '+');
    console.log(' ' + rowIds[i] + ' ' + rowSection.repeat(3) + '|');
  }
  console.log(' '.repeat(3) + rowBorder.repeat(3) + '+');
}

function displayWinner() {
  return null;
}

function letUserMarkBoard() {
  return null;
}

function letComputerMarkBoard() {
  return null;
}

function displayGameRules() {
  console.log('*'.repeat(29) + " Tic Tac Toe " + '*'.repeat(29));
  console.log("It's a 2-player game played on a 3x3 grid called the board.");
  console.log("Each player takes a turn and marks a square on the board.");
  console.log("A player wins if he/she gets 3 squares in:");
  console.log(" - row–horizontal\n - vertical\n - or diagonal");
  console.log("It's a tie if all 9 squares are filled and none has 3 in a row.");
  console.log("To input your mark you have specify a row Id and cell Id.");
  console.log("Row IDs are labeled as A, B or C, and cell IDs - 1, 2 and 3");
  console.log('*'.repeat(70));
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function getHumanPlayerRowIdInput(text) {
  prompt(text);
  let rowId;

  while (true) {
    rowId = readline.question('> ').toUpperCase();
    let validRowIds = getValidRowIds();
    if (validRowIds.includes(rowId)) break;
    prompt(`[WARN] Invalid row ID. Please use one from - ${validRowIds}`);
  }
  return rowId;
}

function getHumanPlayerCellIdInput(text) {
  prompt(text);
  let cellId;

  while (true) {
    cellId = readline.questionInt('> ');
    let validCellIds = getValidCellIds();

    if (validCellIds.includes(cellId)) break;
    prompt(`[WARN] Invalid cell ID. Please one from - ${validCellIds}`);
  }

  return cellId;
}

displayGameRules();
// Main loop
while (true) {
  displayEmptyBoard();
  let rowId = getHumanPlayerRowIdInput('Please specify row ID');
  let cellId = getHumanPlayerCellIdInput('Please specify cell ID');
  break;
}