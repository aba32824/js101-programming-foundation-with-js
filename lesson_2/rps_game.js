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
 *  - Scissors cuts paper
 *  - Paper covers rock
 *  - Rock crushes lizard
 *  - Lizard poisons Spock
 *  - Spock smashes scissors
 *  - Scissors decapitates lizard
 *  - Lizard eats paper
 *  - Paper disproves Spock
 *  - Spock vaporizes rock
 *  - and as it always has, Rock crushes scissors.
 *
 *  See more details: https://the-big-bang-theory.com/rock-paper-scissors-lizard-spock/
 */

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];
const WINNING_MAP = {
  rock: ['scissors'],
  paper: ['rock'],
  scissors: ['paper']
};

function getRandomItem() {
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[index];
}

function getWinner(player1, player2) {
  // default case - both players got the same item, so it returns null
  if (player1.item === player2.item) return null;
  // other scenarios
  if (WINNING_MAP[player1.item][0] === player2.item) {
    return player1.name;
  } else {
    return player2.name;
  }
}

function prompt(text) {
  console.log(`=> ${text}`);
}

while (true) {
  let yourPlayer = {
    name: "you",
    item: undefined
  };
  let computerPlayer = {
    name: "computer",
    item: getRandomItem()
  };

  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  yourPlayer.item = readline.question('> ');

  while (!VALID_CHOICES.includes(yourPlayer.item)) {
    prompt("That's not a valid choice. Please repeat");
    yourPlayer.item = readline.question('> ');
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
