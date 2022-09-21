/**
 * Write a program that solicits six numbers from the user and logs a message
 * that describes whether the 6th number appears among the first five numbers.
 */

const LOG_STRING = `
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17
`;

function getNumbersFromLogs() {
  return LOG_STRING.split('\n')
  .filter(line => line.length)
  .map(line => line.split(':')[1].trim());
}

function searchForNum(numbers, num) {
  let searchResult = numbers.filter(n => n === (num).toString());
  return searchResult.length >= 2;
}

function search(num) {
  const verb = 'appear';
  const numbers = getNumbersFromLogs();
  let statement = (searchForNum(numbers, num)) ? `${verb}s` : `does not ${verb}`;
  console.log(`The number ${num} ${statement} in ${numbers}.`);
}

search(17);
search(18);