// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const DEFAULT_LOCALE = "eng";

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

function getMathOperation(locale) {
  const validOps = [1, 2, 3, 4];
  prompt(MESSAGES[locale].mathOperationText);
  let operation = readline.questionInt();

  while (!validOps.includes(operation)) {
    prompt(MESSAGES[locale].mathOperationError);
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

let locales = Object.keys(MESSAGES);
prompt(`Supported locales are: ${locales}.\nPlease specify your locale (default is eng)`);
let locale = readline.question();

if (!MESSAGES.hasOwnProperty(locale)) {
  prompt(`You provided an invalid locale. Setting it up to default '${DEFAULT_LOCALE}'`);
  locale = DEFAULT_LOCALE;
}

prompt(MESSAGES[locale].welcomeText);

while (true) {
  let number1 = getNumber(MESSAGES[locale].firstNumberText);
  let number2 = getNumber(MESSAGES[locale].secondNumberText);
  let operation = getMathOperation(locale);
  let output = getOutput(number1, number2, operation);

  prompt(`${MESSAGES[locale].outputText}: ${output}`);
  prompt(MESSAGES[locale].continuePromptText);
  let response = readline.question();
  if (response === 'n') {
    prompt(MESSAGES[locale].exitText);
    break;
  }
}
