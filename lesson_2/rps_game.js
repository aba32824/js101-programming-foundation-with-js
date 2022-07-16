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

function getRandomItem() {
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[index];
}

function hasWinningRule(item1, item2) {
  for (let mapItem of WINNING_MAP[item1]) {
    if (mapItem === item2) return true;
  }
  return false;
}

function getWinner(player1, player2) {
  // default case - both players got the same item, so it returns null
  if (player1.item === player2.item) return null;
  // other scenarios
  if (hasWinningRule(player1.item, player2.item)) {
    return player1.name;
  } else {
    return player2.name;
  }
}

function prompt(text) {
  console.log(`=> ${text}`);
}

function getCountOfItems(charSet, lastIndex) {
  let itemCount = 0;
  for (let item of VALID_CHOICES) {
    let itemChar = item.slice(0, lastIndex);
    if (itemChar === charSet) itemCount++;
  }
  return itemCount;
}

function getItemByFirstChar(chars) {
  for (let item of VALID_CHOICES) {
    if (item.startsWith(chars)) return item;
  }
  return undefined;
}

function getUserItemByCharCount(charCount) {
  let chars = readline.question('> ');
  let itemCount = getCountOfItems(chars, charCount);

  if (itemCount == 1) {
    return getItemByFirstChar(chars);
  } else if (itemCount > 1) {
    return null;
  } else {
    return undefined;
  }
}

// Main loop

while (true) {
  let yourPlayer = {
    name: "you",
    item: null
  };
  let computerPlayer = {
    name: "computer",
    item: getRandomItem()
  };

  prompt(`Choose one from: ${VALID_CHOICES.join(', ')}`);
  prompt('Specify the first character to indicate your choice.');

  let charCount = 1;
  while (true) {
    let item = getUserItemByCharCount(charCount);
    if (item) {
      yourPlayer.item = item;
      break;
    } else if (item === null) {
      prompt("There are multiple items that start from this character.");
      charCount++;
    } else {
      prompt("That's not a valid choice. Please repeat");
    }
  }

  prompt(`Your chose "${yourPlayer.item}", computer chose "${computerPlayer.item}"`);
  let winner = getWinner(yourPlayer, computerPlayer);

  if (winner) {
    prompt(`The winner - ${winner}!`);
  } else {
    prompt("It's a tie!");
  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question('> ').toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Please input either "y" or "n"');
    answer = readline.question('> ').toLowerCase();
  }

  if (answer === 'n') break;
}
