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
if (operation === 1) { // 1 - represents addition
  output = number1 + number2;
} else if (operation === 2) { // 2 - represents subtraction
  output = number1 - number2;
} else if (operation === 3) { // 3 - represents multiplication
  output = number1 * number2;
} else if (operation === 4) { // 4 - represents division
  output = number1 / number2;
}

prompt(`The result is: ${output}`);
