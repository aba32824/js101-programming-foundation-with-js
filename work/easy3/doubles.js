/**
 * A double number is an even-length number whose left-side digits are exactly
 * the same as its right-side digits. For example, 44, 3333, 103103, and 7676
 * are all double numbers, whereas 444, 334433, and 107 are not.
 *
 * Write a function that returns the number provided as an argument multiplied
 * by two, unless the argument is a double number; otherwise, return 
 * the double number as-is.
 */

function isDouble(num) {
  let numAsStr = (num).toString();
  if (numAsStr.length % 2 === 0) {
    let halfLen = numAsStr.length / 2;
    return numAsStr.substr(0, halfLen) === numAsStr.substr(halfLen);
  }
  return false;
}

function twice(num) {
  if (isDouble(num)) return num;
  return num * 2;
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676