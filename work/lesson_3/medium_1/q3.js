/**
 * 
 * This code would fail when the input is 0 or a negative number,
 * and the loop should be changed.
 * How can it be possible without using a do/while loop?
 * 
 * Note that we're not looking to find the factors for 0 or negative numbers,
 * but we want to handle it gracefully instead of raising an exception 
 * or going into an infinite loop.
 */

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

function newFactors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    // NOTE: the following instruction checks whether a number is divisible
    //       without any remainder
    if (number % divisor === 0) factors.push(divisor);
    divisor--;
  }
  return factors.reverse();
}

let result = newFactors(0);
console.log(result);
result = newFactors(-1);
console.log(result);
result = newFactors(14);
console.log(result);