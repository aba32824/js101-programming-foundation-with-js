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

// Board that consists of rows/cells
const BOARD = {
  A: {},
  B: {},
  C: {}
};
const CELL = {
  mark: undefined,
  player: null
};

// Players
const COMPUTER_PLAYER = {
  name: "computer",
  mark: "X"
};
const HUMAN_PLAYER = {
  name: "you",
  mark: "0"
};

function initBoard() {
  Object.keys(BOARD).forEach(key => {
    for (let cellId = 1; cellId <= 3; cellId++) {
      BOARD[key][cellId] = JSON.parse(JSON.stringify(CELL));
    }
  });
}

function resetBoard() {
  Object.keys(BOARD).forEach(key => {
    BOARD[key] = {};
  });
}

function getValidRowIds() {
  return Object.keys(BOARD);
}

function getValidCellIds() {
  return Array.from({length: Object.keys(BOARD).length}, (_, id) => id + 1);
}

function displayBoard() {
  let rowBorder = '+' + '-'.repeat(3);

  console.log();
  console.log(' '.repeat(5) + getValidCellIds().join(' | '));
  console.log(' '.repeat(3) + rowBorder.repeat(3) + '+');

  for (let rowId of getValidRowIds()) {
    let marks = Object.values(BOARD[rowId]).map((cell) => {
      return (cell.mark !== undefined) ? ` ${cell.mark} ` : ' '.repeat(3);
    });
    console.log(` ${rowId} |${marks.join('|')}|`);
    console.log(' '.repeat(3) + rowBorder.repeat(3) + '+');
  }
}

function displayWinner() {
  return null;
}

function letUserMarkBoard(rowId, cellId) {
  BOARD[rowId][cellId].mark = HUMAN_PLAYER.mark;
  BOARD[rowId][cellId].player = HUMAN_PLAYER.name;
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
    prompt(`[WARN] Invalid cell ID. Please get one from - ${validCellIds}`);
  }

  return cellId;
}

displayGameRules();
initBoard();
displayBoard();

// Main loop
while (true) {
  // processing human player input and assigning it to the board
  let rowId = getHumanPlayerRowIdInput('Please specify row ID');
  let cellId = getHumanPlayerCellIdInput('Please specify cell ID');
  letUserMarkBoard(rowId, cellId);
  console.log(BOARD[rowId][cellId]);
  displayBoard();
}