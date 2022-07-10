// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const calcMessages = require('./calculator_messages.json');

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

function getMathOperation() {
  const validOps = [1, 2, 3, 4];
  prompt(calcMessages.mathOperationText);
  let operation = readline.questionInt();

  while (!validOps.includes(operation)) {
    prompt(calcMessages.mathOperationError);
    operation = readline.questionInt();
  }
  return operation;
}

function getOutput(number1, number2, operation) {
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
      break;
  }
  return output;
}

prompt('Welcome to Calculator!');

while (true) {
  let number1 = getNumber(calcMessages.firstNumberText);
  let number2 = getNumber(calcMessages.secondNumberText);
  let operation = getMathOperation();
  let output = getOutput(number1, number2, operation);

  prompt(`${calcMessages.outputText}: ${output}`);
  prompt(calcMessages.continuePromptText);
  let response = readline.question();
  if (response === 'n') {
    prompt(calcMessages.exitText);
    break;
  }
}
