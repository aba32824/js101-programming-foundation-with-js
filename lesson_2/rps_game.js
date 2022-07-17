/**
 * Rock, Paper and Scissors (+ Lizard and Spock) game implementation.
 *
 * The simple RPS game rules:
 *   - If player A chooses rock and player B chooses scissors, player A wins.
 *   - If player A chooses paper and player B chooses rock, player A wins.
 *   - If player A chooses scissors and player B chooses paper, player A wins.
 *   - If both players choose the same item, neither player wins. It's a tie.
 *
 * The exteneded RPS+LS game rules:
 *  - Scissors cuts Paper
 *  - Paper covers Rock
 *  - Rock crushes Lizard
 *  - Lizard poisons Spock
 *  - Spock smashes Scissors
 *  - Scissors decapitates Lizard
 *  - Lizard eats Paper
 *  - Paper disproves Spock
 *  - Spock vaporizes Rock
 *  - and as it always has, Rock crushes Scissors.
 *
 *  See more details: https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/
 */

const readline = require('readline-sync');

const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
// NOTE: Keys are items that win others that sit in the linked array
const WINNING_MAP = {
  rock: ['scissors', 'lizard'],
  paper: ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};
const MAX_SCORE = 3;
// settings for players
let yourPlayer = {
  name: "you",
  item: null,
  scores: 0
};
let computerPlayer = {
  name: "computer",
  item: null,
  scores: 0
};

// Gets random item for the computer player.
function getRandomItem() {
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[index];
}

// Sees if there is a winning rule for a combination of items.
function hasWinningRule(item1, item2) {
  return WINNING_MAP[item1].includes(item2);
}

// Get the winner's name.
// It returns:
// - 'you'
// - 'computer'
// - null if both, you and computer, specified the same item
//
function getWinnerName(player1, player2) {
  // default case - both players got the same item, so it returns null
  if (player1.item === player2.item) return null;
  // other scenarios
  if (hasWinningRule(player1.item, player2.item)) {
    player1.scores += 1;
    return player1.name;
  } else {
    player2.scores += 1;
    return player2.name;
  }
}

function prompt(text) {
  console.log(`=> ${text}`);
}

// Gets the number of items that start from a particular char.
function getCountOfItems(charSet, lastIndex) {
  let itemCount = 0;
  for (let item of VALID_CHOICES) {
    let itemChar = item.slice(0, lastIndex);
    if (itemChar === charSet) itemCount++;
  }
  return itemCount;
}

// Returns an item that begins from a particular char (or chars).
// Otherwise it returns undefined if nothing found.
function getItemByChars(chars) {
  for (let item of VALID_CHOICES) {
    if (item.startsWith(chars)) return item;
  }
  return undefined;
}

// Reads the user input (shortened) and tries to guess the item.
// It return:
// - item, if it found
// - null, if there are more items that start from a particular char (or chars)
// - undefined, if the user input was wrong
function getUserItemByCharCount(charCount) {
  let chars = readline.question('> ').toLowerCase();
  let itemCount = getCountOfItems(chars, charCount);

  if (itemCount === 1) {
    return getItemByChars(chars);
  } else if (itemCount > 1) {
    return null;
  } else {
    return undefined;
  }
}

// Keeps looping until the user input can be recognisable
// and then returns an item.
function getUserItem() {
  let charCount = 1;
  let item;
  prompt('Specify the first character to indicate your choice.');

  while (true) {
    item = getUserItemByCharCount(charCount);
    if (item) {
      break;
    } else if (item === null) {
      prompt("There are multiple items that start from this character.");
      prompt("Please add the first char along with the following char.");
      charCount++;
    } else {
      prompt("That's not a valid choice. Please repeat.");
    }
  }
  return item;
}

function displayWinnerName(winner) {
  if (winner) {
    prompt(`The winner - ${winner}!`);
  } else {
    prompt("It's a tie!");
  }
}

function showGrandWinnerIfAny(player1, player2) {
  let name;
  let scores;
  if (player1.scores >= MAX_SCORE) {
    name = player1.name;
    scores = player1.scores;
  } else if (player2.scores >= MAX_SCORE) {
    name = player2.name;
    scores = player2.scores;
  }

  if (name && scores) {
    prompt(`"${name}" is the grand winner by getting ${scores} scores!`);
  }
}

function doesUserWantExit() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question('> ').toLowerCase();

  while (answer !== 'y' && answer !== 'n') {
    prompt('Please input either "y" or "n"');
    answer = readline.question('> ').toLowerCase();
  }

  return answer === 'n';
}

// Main loop
while (true) {
  prompt(`Choose one from: ${VALID_CHOICES.join(', ')}`);

  computerPlayer.item = getRandomItem();
  yourPlayer.item = getUserItem();

  prompt(`Your chose "${yourPlayer.item}", computer chose "${computerPlayer.item}"`);
  let winnerName = getWinnerName(yourPlayer, computerPlayer);
  displayWinnerName(winnerName);

  // show a winner that got the max score
  showGrandWinnerIfAny(computerPlayer, yourPlayer);

  // reseting scores if either you or computer got the max score
  if (yourPlayer.scores === MAX_SCORE || computerPlayer.scores === MAX_SCORE) {
    yourPlayer.scores = 0;
    computerPlayer.scores = 0;
  }

  if (doesUserWantExit()) break;
}
