/**
 * Write another function that returns true if the string passed as an argument
 * is a palindrome, or false otherwise. This time, however, your function
 * should be case-insensitive, and should ignore all non-alphanumeric
 * characters. If you wish, you may simplify things by calling the isPalindrome
 * function you wrote in the previous exercise.
 */

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isRealPalindrome(text) {
  let cleanText = text
    .toLowerCase()
    .split('')
    .filter(char => isLetter(char) || isNumber(char))
    .join('');
  return cleanText === cleanText.split('').reverse().join('');
}

console.log(isRealPalindrome("Madam, I'm Adam"));
console.log(isRealPalindrome('356a653'));
console.log(isRealPalindrome('123ab321'));