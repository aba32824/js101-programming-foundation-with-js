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
// NOTE: keys are items for the game and
//       values are shortcuts to specify a corresponding item
const VALID_CHOICES = {
  rock: 'r',
  paper: 'p',
  scissors: 'sc',
  lizard: 'l',
  spock: 'sp'
};
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
let userPlayer = {
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
  let keys = Object.keys(VALID_CHOICES);
  let index = Math.floor(Math.random() * keys.length);
  return keys[index];
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
function getWinnerName(user, computer) {
  // default case - both players got the same item, so it returns null
  if (user.item === computer.item) return null;
  // other scenarios
  let winnerName;
  if (hasWinningRule(user.item, computer.item)) {
    user.scores += 1;
    winnerName = user.name;
  } else {
    computer.scores += 1;
    winnerName = computer.name;
  }
  return winnerName;
}

function prompt(text) {
  console.log(`=> ${text}`);
}

// Keeps looping until the user input can be recognisable
// and then returns an item.
function getUserItem() {
  let item;
  prompt('Input a shortcut to specify your choice.');

  do {
    let shortcut = readline.question('> ').toLowerCase();

    for (let [key, value] of Object.entries(VALID_CHOICES)) {
      if (shortcut === value) item = key;
    }
    if (!item) prompt("That's not a valid choice. Please repeat.");
  } while (!item);

  return item;
}

function displayWinnerName(name) {
  if (name) {
    prompt(`The winner - ${name}!`);
  } else {
    prompt("It's a tie!");
  }
}

function getGrandWinnerIfAny(user, computer) {
  let [name, scores] = (user.scores >= MAX_SCORE)
    ? [user.name, user.scores]
    : [computer.name, computer.scores];

  return `*** "${name}" is the grand winner by getting ${scores} scores ***`;
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

function playSingleRound() {
  prompt(`Choose one from: ${Object.keys(VALID_CHOICES).join(', ')}`);
  for (let item in VALID_CHOICES) {
    prompt(` use a shortcut (${VALID_CHOICES[item]}) to specify "${item}"`);
  }
}

function showGameRules() {
  console.log('>>> Rock, Paper and Scissors (Lizard&Spock) game rules <<<');
  console.log('|   Scissors cuts Paper                                  |');
  console.log('|   Paper covers Rock                                    |');
  console.log('|   Rock crushes Lizard                                  |');
  console.log('|   Lizard poisons Spock                                 |');
  console.log('|   Spock smashes Scissors                               |');
  console.log('|   Scissors decapitates Lizard                          |');
  console.log('|   Lizard eats Paper                                    |');
  console.log('|   Paper disproves Spock                                |');
  console.log('|   Spock vaporizes Rock                                 |');
  console.log('|   and as it always has, Rock crushes Scissors          |');
  console.log('>>> ************************************************** <<<');
}

showGameRules();
// Main loop
while (true) {
  playSingleRound();
  computerPlayer.item = getRandomItem();
  userPlayer.item = getUserItem();

  prompt(`Your chose "${userPlayer.item}", computer chose "${computerPlayer.item}"`);
  let winnerName = getWinnerName(userPlayer, computerPlayer);
  displayWinnerName(winnerName);

  if (userPlayer.scores === MAX_SCORE || computerPlayer.scores === MAX_SCORE) {
    let grandWinner = getGrandWinnerIfAny(computerPlayer, userPlayer);
    userPlayer.scores = 0;
    computerPlayer.scores = 0;
    console.clear();
    prompt(grandWinner);
  }

  if (doesUserWantExit()) break;
}
