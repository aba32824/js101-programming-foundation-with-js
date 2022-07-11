/**
 * Mortgage/Car loan calculator. The following is a formula
 * to calculate the loan details:
 *  m = p * (j / (1 - Math.pow((1 + j), (-n))))
 *
 * where:
 *  m = monthly payment
 *  p = loan amount
 *  j = monthly interest rate
 *  n = loan duration in months
 */

const readline = require('readline-sync');

function prompt(text) {
  console.log(`==> ${text}`);
}

function isNumberValid(number) {
  return !Number.isNaN(Number(number));
}

function getNumber(text) {
  let number;
  while (true) {
    prompt(text);
    number = readline.question();
    if (isNumberValid(number)) {
      break;
    }
  }
  return Number(number);
}

function calculateMontlyPayment(loanAmount, annualInterestRate, months) {
  let rate = (annualInterestRate / 100) / 12.00;
  const result = (loanAmount * (rate / (1 - Math.pow((1 + rate), (-months)))));
  return result.toFixed(2);
}

while (true) {
  let loanAmount = getNumber('Enter the loan amount (integer number)');
  let annualRate = getNumber('Enter Annual Percentage Rate (integer number)');
  let loanDuration = getNumber('Entery the loan duration in months (integer number)');
  const payment = calculateMontlyPayment(loanAmount, annualRate, loanDuration);
  prompt(`Your monthly payment is $${payment}`);
  const totalPayment = loanDuration * payment;
  prompt(`Your total payment is   $${totalPayment}`);
  // stop doing calculation if the user wants to exit
  prompt('Do you want to exit? Press "y" or "Y" to stop');
  let response = readline.question();
  if (response === 'y' || response === 'Y') {
    prompt('Exiting ...');
    break;
  }
}