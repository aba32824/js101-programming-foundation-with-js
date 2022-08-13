/**
 *
 * Tic Tac Toe is a 2-player game played on a 3x3 grid called the board.
 * Each player takes a turn and marks a square on the board. The first player
 * to get 3 squares in a row–horizontal, vertical, or diagonal–wins.
 * If all 9 squares are filled and neither player has 3 in a row,
 * the game is a tie.
 * ----------------------------------------------------------------------------
 *                            ---- PEDAC PLAN ----
 * ----------------------------------------------------------------------------
 *
 *  1) understand the (P)roblem
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *   Problem Input/Output
 *   --------------------
 *
 *   input:
 *    - empty board
 *    - a human player inputs row/cell IDs to put a mark on the board
 *    - a computer player randomly inputs a mark on a free cell
 *
 *   output:
 *    - board of 3x3 is full (it means a tie)
 *    - board has a row (i.e., horizontal, vertical or diagonal)
 *      filled in with same marks
 *
 *  Mental Model
 *  ------------
 *
 *   The 3x3 board consists of 3 rows and 9 cells on each row.
 *   A row has an id (e.g., A, B or C), and each cell as well (e.g., 1, 2 or 3).
 *   The human player can set row/cell ids to put a mark on. So does
 *  the computer player, but a free row/cell combination is chosen randomly.
 *
 *   The program runs a loop and waits for the player's inputs. That is
 *   the outer loop that controls the game. There is an inner loop that
 *   controls the way the board is populated. The inner loop runs 9 times to
 *   fill in the board. However, it may break if there is a row
 *   (i.e., horizontal, vertical or diag.) where 3 cells were filled in with
 *   the same marks.
 *
 *  2) (E)xamples (or Test cases)
 *  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *
 *   An empty board consists of 3 rows (i.e., A, B and C), and each row has
 *   all 3 items filled in with `null` for the sake of simplicity.
 *
 *  (example 1 - Human player wins)
 *  -------------------
 *   Display the board
 *  -------------------
 *   Board => [
 *     row A => [1 => null, 2 => null, 3 => null],
 *     row B => [1 => null, 2 => null, 3 => null],
 *     row C => [1 => null, 2 => null, 3 => null]
 *   ]
 *  -----------------------------------
 *   Human player does an input of "X"
 *  -----------------------------------
 *   - row id  => A
 *   - cell id => 1
 *  -------------------
 *   Display the board
 *  -------------------
 *   Board => [
 *     row A => [1 => "X", 2 => null, 3 => null],
 *     row B => [1 => null, 2 => null, 3 => null],
 *     row C => [1 => null, 2 => null, 3 => null]
 *   ]
 *  --------------------------------------
 *   Computer player does an input of "0"
 *  --------------------------------------
 *   - row id  => C
 *   - cell id => 3
 *  -------------------
 *   Display the board
 *  -------------------
 *   Board => [
 *     row A => [1 => "X", 2 => null, 3 => null],
 *     row B => [1 => null, 2 => null, 3 => null],
 *     row C => [1 => null, 2 => null, 3 => "0"]
 *   ]
 *  -----------------------------------
 *   Human player does an input of "X"
 *  -----------------------------------
 *   - row id  => A
 *   - cell id => 2
 *  -------------------
 *   Display the board
 *  -------------------
 *   Board => [
 *     row A => [1 => "X", 2 => "X", 3 => null],
 *     row B => [1 => null, 2 => null, 3 => null],
 *     row C => [1 => null, 2 => null, 3 => "0"]
 *   ]
 *  --------------------------------------
 *   Computer player does an input of "0"
 *  --------------------------------------
 *   - row id  => B
 *   - cell id => 2
 *  -------------------
 *   Display the board
 *  -------------------
 *   Board => [
 *     row A => [1 => "X", 2 => "X", 3 => null],
 *     row B => [1 => null, 2 => "0", 3 => null],
 *     row C => [1 => null, 2 => null, 3 => "0"]
 *   ]
 *  -----------------------------------
 *   Human player does an input of "X"
 *  -----------------------------------
 *   - row id  => A
 *   - cell id => 3
 *  -------------------
 *   Display the board
 *  -------------------
 *   Board => [
 *     row A => [1 => "X", 2 => "X", 3 => "X"],
 *     row B => [1 => null, 2 => "0", 3 => null],
 *     row C => [1 => null, 2 => null, 3 => "0"]
 *   ]
 *  --------------------
 *   Display the winner
 *  --------------------
 *  --------------------
 *   Ask to play again
 *  --------------------
 *
 *  3) (D)ata structure
 *  ~~~~~~~~~~~~~~~~~~~
 *
 *   One option could be an object that keeps "rows" as a key-value pair where
 *   the key is an id (e.g., A, B or C). The value is a place to store row's
 *   cells. The value data structure would be an object of objects. Each inner
 *   object represents a cell.
 *
 *  4) (A)lgorithm
 *  ~~~~~~~~~~~~~~
 *
 *    1 - Display the initial empty 3x3 board.
 *    2 - Ask the user to mark a cell.
 *    3 - Computer marks a cell.
 *    4 - Display the updated board state.
 *    5 - If it's a winning board, display the winner.
 *    6 - If the board is full, display tie.
 *    7 - If neither player won and the board is not full, go to #2
 *    9 - Play again?
 *   10 - If yes, go to #1
 *   11 - Exit the game.
 */

const readline = require('readline-sync');

// Board that consists of 3 rows
const BOARD = {
  A: {},
  B: {},
  C: {}
};

const BOARD_SIZE = Object.keys(BOARD).length;

// Players and their settings
const COMPUTER_PLAYER = {
  name: "computer",
  mark: "X",
  winner: false,
  winnerScore: 0
};
const HUMAN_PLAYER = {
  name: "human being",
  mark: "0",
  winner: false,
  winnerScore: 0
};
// Max scores for the match
const NUM_OF_GAMES = 5;

// it support 3 cells per row by default
const FIRST_CELL_ID = 1;
const LAST_CELL_ID = 3;
const THREAT_LEVEL = LAST_CELL_ID - FIRST_CELL_ID;

function resetWinnerFlagForPlayers() {
  [HUMAN_PLAYER, COMPUTER_PLAYER].forEach(player => {
    player.winner = false;
  });
}

function resetScoresForPlayers() {
  [HUMAN_PLAYER, COMPUTER_PLAYER].forEach(player => {
    player.winnerScore = 0;
  });
}

function initNewGame() {
  let rowIds = getValidRowIds();

  rowIds.forEach(rowId => {
    for (let cellId = FIRST_CELL_ID; cellId <= LAST_CELL_ID; cellId++) {
      BOARD[rowId][cellId] = { mark: null };
    }
  });

  resetWinnerFlagForPlayers();
}

function displayBoard() {
  let rowBorder = '+' + '-'.repeat(3);

  console.log();
  console.log(' '.repeat(5) + getValidCellIds().join(' | '));
  console.log(' '.repeat(3) + rowBorder.repeat(3) + '+');

  for (let rowId of getValidRowIds()) {
    let marks = Object.values(BOARD[rowId]).map((cell) => {
      return (cell.mark) ? ` ${cell.mark} ` : ' '.repeat(3);
    });
    console.log(` ${rowId} |${marks.join('|')}|`);
    console.log(' '.repeat(3) + rowBorder.repeat(3) + '+');
  }
}

function displayWinner() {
  let [winner] = [COMPUTER_PLAYER, HUMAN_PLAYER]
    .filter(player => player.winner);
  let name = winner.name;
  let totalScore = winner.winnerScore;

  prompt(`The winner is "${name}"!`);

  [COMPUTER_PLAYER, HUMAN_PLAYER].forEach(player => {
    prompt(`Player "${player.name}" scores - ${player.winnerScore}`);
  });

  if (totalScore >= NUM_OF_GAMES) {
    prompt(`"${name}" won the match! The total number of wins ${totalScore}!`);
    resetScoresForPlayers();
  }
}

function setWinner(mark) {
  const [player] = [COMPUTER_PLAYER, HUMAN_PLAYER]
    .filter(player => player.mark === mark);
  player.winner = true;
  player.winnerScore += 1;
}

function getUniqueMarks(marks) {
  return marks.filter((mark, index, self) => self.indexOf(mark) === index);
}

function getMarkFromMarks(marks) {
  if (marks.length !== BOARD_SIZE) return null;

  let unique = getUniqueMarks(marks);
  if (unique.length === 1) return unique[0];

  return null;
}

function getRowCompleteObject(rowName) {
  return {
    complete: false,
    mark: null,
    rowName: rowName
  };
}

function setRowCompleteIfHasMark(marks, rowComplete) {
  let mark = getMarkFromMarks(marks);
  if (!mark) return false;

  rowComplete.mark = mark;
  rowComplete.complete = true;

  return true;
}

function getValidRowIds() {
  return Object.keys(BOARD);
}

function getValidCellIds() {
  return Array.from({length: Object.keys(BOARD).length}, (_, id) => id + 1);
}

function getAnyHorizontalRowComplete() {
  let rowComplete = getRowCompleteObject('horizontal');

  for (let rowId of getValidRowIds()) {
    let marks = Object.values(BOARD[rowId])
      .map(cell => cell.mark)
      .filter(mark => mark);

    if (setRowCompleteIfHasMark(marks, rowComplete)) break;
  }

  return rowComplete;
}

function getAnyVerticalRowComplete() {
  let rowComplete = getRowCompleteObject('vertical');

  for (let cellId of getValidCellIds()) {
    let marks = getValidRowIds()
      .map(rowId => BOARD[rowId][cellId].mark)
      .filter(mark => mark);

    if (setRowCompleteIfHasMark(marks, rowComplete)) break;
  }

  return rowComplete;
}

function buildDiagonalCombo(rowIds) {
  let cellIds = getValidCellIds();
  return rowIds.reduce((acc, key, idx) => ({...acc, [key]: cellIds[idx]}), {});
}

function getDiagonalCombos() {
  let rowIds = getValidRowIds();
  return [
    buildDiagonalCombo(rowIds),
    buildDiagonalCombo(rowIds.slice().reverse())
  ];
}

function getAnyDiagonalRowComplete() {
  let rowComplete = getRowCompleteObject('diagonal');
  let diagonalCombos = getDiagonalCombos();

  for (let combo of diagonalCombos) {
    let marks = [];
    for (let [rowId, cellId] of Object.entries(combo)) {
      let cellMark = BOARD[rowId][cellId].mark;
      if (cellMark) marks.push(cellMark);
    }

    if (setRowCompleteIfHasMark(marks, rowComplete)) break;
  }

  return rowComplete;
}

function isBoardFull() {
  for (let rowId of getValidRowIds()) {
    let row = Object.values(BOARD[rowId]);
    if (!isRowFull(row)) return false;
  }

  return true;
}

function getRandomRowId() {
  let rowIds = getValidRowIds();
  let randIdx = Math.floor(Math.random() * rowIds.length);
  return rowIds[randIdx];
}

function isRowFull(row) {
  return row.every(cell => cell.mark !== null);
}

function hasThreatLevel(row, targetMark) {
  let result = row.filter(cell => cell.mark === targetMark);
  return result.length === THREAT_LEVEL;
}

function getFreeCell(cells) {
  return cells.filter(cell => cell.mark === null)[0];
}

function fixThreatInRow(row) {
  let cell = getFreeCell(row);
  cell.mark = COMPUTER_PLAYER.mark;
}

function getFreeHorizontalRowIds() {
  return getValidRowIds().filter(rowId => {
    let row = Object.values(BOARD[rowId]);
    return !isRowFull(row);
  });
}

function fixHorizontalThreat(targetMark) {
  let freeRowIds = getFreeHorizontalRowIds();

  for (let rowId of freeRowIds) {
    let row = Object.values(BOARD[rowId]);

    if (hasThreatLevel(row, targetMark)) {
      fixThreatInRow(row);
      return true;
    }
  }

  return false;
}

function getVerticalRow(cellId) {
  return getValidRowIds().map(rowId => BOARD[rowId][cellId]);
}

function getFreeCellIds() {
  return getValidCellIds().filter(cellId => {
    let row = getVerticalRow(cellId);
    return !isRowFull(row);
  });
}

function fixVerticalThreat(targetMark) {
  let freeCellIds = getFreeCellIds();

  for (let cellId of freeCellIds) {
    let row = getVerticalRow(cellId);

    if (hasThreatLevel(row, targetMark)) {
      fixThreatInRow(row);
      return true;
    }
  }

  return false;
}

function fixDiagonalThreat(targetMark) {
  for (let combo of getDiagonalCombos()) {
    let row = [];
    Object.entries(combo).forEach(([rowId, cellId]) => {
      row.push(BOARD[rowId][cellId]);
    });

    if (isRowFull(row)) continue;

    if (hasThreatLevel(row, targetMark)) {
      fixThreatInRow(row);
      return true;
    }
  }

  return false;
}

const AI_DISPATCH_TABLE = [
  fixHorizontalThreat,
  fixVerticalThreat,
  fixDiagonalThreat
];

function setComputerMark(targetMark) {

  for (let fixFunc of AI_DISPATCH_TABLE) {
    if (fixFunc(targetMark)) return true;
  }

  return false;
}

function setComputerRandomMark() {
  while (true) {
    let rowId = getRandomRowId();
    let cell = getFreeCell(Object.values(BOARD[rowId]));

    if (cell) {
      cell.mark = COMPUTER_PLAYER.mark;
      break;
    }
  }
}

function processComputerPlayerInput() {
  if (isBoardFull()) return;
  // trying to offensive mode for the computer player
  let attackStatus = setComputerMark(COMPUTER_PLAYER.mark);
  if (attackStatus) console.log(`--> Computer attacked and got the win!`);
  if (attackStatus) return;
  // trying to defense the computer player
  let defenseStatus = setComputerMark(HUMAN_PLAYER.mark);
  if (!defenseStatus) setComputerRandomMark();
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function stopTheGame() {
  prompt("Do you want to play a new game?");
  prompt("Input 'y' to play again or 'n' to exit");
  do {
    let answer = readline.question('> ').toLowerCase();

    if (answer === 'n') {
      prompt('Exiting...');
      return true;
    } else if (answer === 'y') {
      return false;
    } else {
      prompt("Please input either 'y' or 'n'");
    }

  } while (true);
}

function setHumanPlayerMarkToBoard(coordinates) {
  const {rowId, cellId} = coordinates;

  if (BOARD[rowId][cellId].mark === null) {
    BOARD[rowId][cellId].mark = HUMAN_PLAYER.mark;
    return true;
  }
  return false;
}

function getHumanPlayerInput() {
  let validRowIds = getValidRowIds();
  let validCellIds = getValidCellIds();

  while (true) {
    let [rowId, cellId] = readline.question('> ').toUpperCase().split('');
    if (validRowIds.includes(rowId) && validCellIds.includes(Number(cellId))) {
      return {
        rowId: rowId,
        cellId: cellId
      };
    } else {
      prompt(`[WARN] Your input is invalid. Please retry.`);
      prompt(`Valid row IDs - ${validRowIds}`);
      prompt(`Valid cell IDs - ${validCellIds}`);
    }
  }
}

function processHumanPlayerInput() {
  while (true) {
    prompt('Please specify row ID and cell ID to set your mark.');
    prompt('For example: A1, C2 or B3');
    let input = getHumanPlayerInput();
    let setMarkResult = setHumanPlayerMarkToBoard(input);

    if (setMarkResult) break;

    prompt('This cell is busy. Please specify the available cell.');
  }
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
  console.log(`Human player mark is "${HUMAN_PLAYER.mark}"`);
  console.log(`Computer player mark is "${COMPUTER_PLAYER.mark}"`);
  console.log('*'.repeat(70));
}

const CHECK_FUNCTIONS = [
  getAnyHorizontalRowComplete,
  getAnyVerticalRowComplete,
  getAnyDiagonalRowComplete
];

function checkBoardHasAnyRowComplete() {
  let check = CHECK_FUNCTIONS.map(func => func()).filter(res => res.complete);
  if (check.length) {
    console.clear();
    const [mark, rowName] = [check[0].mark, check[0].rowName];
    prompt(`There is a ${rowName} row complete!`);
    setWinner(mark);
    displayBoard();
    displayWinner();
    return true;
  }

  return false;
}

displayGameRules();
initNewGame();
displayBoard();

const PROCESS_PLAYERS_INPUT = [
  processHumanPlayerInput,
  processComputerPlayerInput
];

// Main loop
MAIN: while (true) {

  for (let inputFunc of PROCESS_PLAYERS_INPUT) {
    inputFunc();
    if (checkBoardHasAnyRowComplete()) {
      if (stopTheGame()) break MAIN;
      console.clear();
      initNewGame();
    }
  }

  displayBoard();

  if (isBoardFull()) {
    console.clear();
    displayBoard();
    prompt("The board is full, it's a tie!");
    if (stopTheGame()) break;
    initNewGame();
    console.clear();
    displayBoard();
  }
}