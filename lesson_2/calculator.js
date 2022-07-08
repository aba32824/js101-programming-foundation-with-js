// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt('Welcome to Calculator!');

prompt("What's the first number?");
let number1 = readline.questionInt();

prompt("What's the second number?");
let number2 = readline.questionInt();

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.questionInt();

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
