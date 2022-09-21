/**
 * Build a program that logs when the user will retire and how many more years
 * the user has to work until retirement.
 */

const readline = require('readline-sync');

function getUserInput() {
  let age = readline.question('What is your age? ');
  let retireAge = readline.question('At what age would you like to retire? ');
  return {
    age: Number(age),
    retireAge: Number(retireAge),
  };
}

function retire() {
  const userInput = getUserInput();
  if (userInput.age >= userInput.retireAge) {
    console.log("You have already retired!");
  } else {
    let diff = userInput.retireAge - userInput.age;
    let year = (new Date()).getFullYear();
    console.log(`It's ${year}. You will retire in ${year + diff}.`);
    console.log(`You have only ${diff} years of work to go!`);
  }
}

retire();