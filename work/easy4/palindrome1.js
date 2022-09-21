/**
 * Write a function that returns true if the string passed as an argument is
 * a palindrome, or false otherwise. A palindrome reads the same forwards
 * and backwards. For this problem, the case matters and all characters matter.
 */

function isPalindrome(text) {
  let midIdx = Math.floor(text.length / 2);
  let firstHalf = text.substring(0, midIdx);
  let secondHalf = text.substring(text.length % 2 === 0 ? midIdx : midIdx + 1);
  return firstHalf === secondHalf.split('').reverse().join('');
}

let res = isPalindrome('356653');
console.log(res);
res = isPalindrome('madam');
console.log(res);