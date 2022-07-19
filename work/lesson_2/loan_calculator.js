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
  return number.trim() !== '' &&
    !Number.isNaN(Number(number)) &&
    Number(number) > 0;
}

function getNumber(text) {
  let number;
  while (true) {
    prompt(text);
    number = readline.question();
    if (isNumberValid(number)) {
      break;
    } else {
      prompt('Number must be a positive integer!');
    }
  }
  return Number(number);
}

function calculateMontlyPayment(loanAmount, annualInterestRate, months) {
  let result;
  if (annualInterestRate > 0) {
    let rate = (annualInterestRate / 100) / 12.00;
    result = (loanAmount * (rate / (1 - Math.pow((1 + rate), (-months)))));
  } else {
    prompt('Your loan has no interest.');
    result = loanAmount / months;
  }
  return result.toFixed(2);
}

function calculateTotalPayment(loanAmount, payment, months) {
  let totalPayment = payment * months;
  return (totalPayment < loanAmount) ? loanAmount : totalPayment;
}

while (true) {
  let loanAmount = getNumber('Input the loan amount (e.g., 10000 for 10K)');
  let annualRate = getNumber('Input Annual Percent., Rate (e.g., 2.5 for 2.5%)');
  let loanDuration = getNumber('Input the loan duration in months (e.g., 36)');
  const payment = calculateMontlyPayment(loanAmount, annualRate, loanDuration);
  prompt(`Your monthly payment is $${payment}`);
  const totalPayment = calculateTotalPayment(loanAmount, payment, loanDuration);
  prompt(`Your total payment is   $${totalPayment}`);
  // stop doing calculation if the user wants to exit
  prompt('Do you want to exit? Press "y" or "Y" to stop');
  let response = readline.question();
  if (response === 'y' || response === 'Y') {
    prompt('Exiting ...');
    break;
  }
}
