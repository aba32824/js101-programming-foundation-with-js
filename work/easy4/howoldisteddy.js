/**
 * Build a program that randomly generates Teddy's age, and logs it to
 * the console. Have the age be a random number between 20 and 120 (inclusive).
 */

const MIN_AGE = 20;
const MAX_AGE = 120;

function getRandomAge() {
  // NOTE: The returned value is no lower than (and may possibly equal) min,
  //       and is less than (and not equal) max. That's why we need + 1
  return parseInt(Math.random() * (MAX_AGE - MIN_AGE + 1) + MIN_AGE);
}

function howOldIsTeddy() {
  console.log(`Teddy is ${getRandomAge()} years old!`);
}

howOldIsTeddy();