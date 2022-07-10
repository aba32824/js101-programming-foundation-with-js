// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isNumberValid(number) {
  return Number.isNaN(number);
}

function getNumber(text) {
  let number;
  do {
    prompt(text);
    number = readline.questionInt();
  } while (isNumberValid(number));
  return number;
}

prompt('Welcome to Calculator!');

let number1 = getNumber("What's the first number?");
let number2 = getNumber("What's the second number?");

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.questionInt();

while (![1, 2, 3, 4].includes(operation)) {
  prompt('Must be 1, 2, 3 or 4');
  operation = readline.questionInt();
}

let output;
switch (operation) {
  case 1:
    output = number1 + number2;
    break;
  case 2:
    output = number1 - number2;
    break;
  case 3:
    output = number1 * number2;
    break;
  case 4:
    output = number1 / number2;
    break;
  default:
    console.log("ERROR - operation is not supported!");
    return;
}

prompt(`The result is: ${output}`);
