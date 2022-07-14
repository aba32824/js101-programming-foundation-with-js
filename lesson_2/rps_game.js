/**
 * Rock, Paper and Scissors game.
 *
 */

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(text) {
  console.log(`=> ${text}`);
}

function getRandomItem() {
  let index = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[index];
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice. Please repeat");
    choice = readline.question();
  }

  let computerChoice = getRandomItem();

  prompt(`Your chose ${choice}, computer chose ${computerChoice}`);
  // Do something to detect a winner
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer !== 'y' && answer !== 'n') {
    prompt('Please input either "y" or "n"');
    answer = readline.question().toLowerCase();
  }

  if (answer == 'n') break;
}
