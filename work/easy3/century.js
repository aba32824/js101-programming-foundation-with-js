/**
 * Write a function that takes a year as input and returns the century.
 * The return value should be a string that begins with the century number,
 * and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.
 * New centuries begin in years that end with 01.
 * So, the years 1901 - 2000 comprise the 20th century.
 * 
 * ----------------------------- PEDAC ----------------------------------------
 * 
 * 1) PROBLEM
 *    It's about converting a year number to a string that corresponds to
 *    a century number. The string ends with suffix that denotes the first,
 *    second, and so on numerals.
 *    Note: new centuries begin in years that end with 01.
 * 
 *    INPUT  - a year number (e.g., 2101 or 1560)
 *    OUTPUT - a string that begins with the century number and ends with 'st',
 *            'nd', etc. E.g. - it's "22nd" for 2101, and "16th" for 1560.
 *
 * 2) EXAMPLE
 *    Year 5 goes to "1st" century.
 *    Year 102 goest to "2nd" century.
 *    Year 1100 goes to "11th" century.
 *    Year 1101 goest to "12th" century.
 *    Year 2299 goes to "22rd" century.
 *    On so on and so forth ...
 * 
 * 3) DATA
 *    Input data is a number (e.g., 101)
 *    Output data is a string (e.g., "11th" if the year is 101)
 * 
 * 4) ALGORITHM
 *    To get a century figure we have to divide the year number by 100 
 *    (i.e., the number of years in a century). For example:
 * 
 *      > e.g., a year has 10101, so it goes to => 10101 / 100 = 101.01
 * 
 *    We may take into account that a non-zero fractional part indicates that
 *    we must add 1 to the integer part to get the century figure. Thus, we go
 *    to the fact that we can always apply Math.ceil(year/100) to find it out.
 *
 *    Now, we go to the fact that centuries like these 21, 22, 33, 51 or 141
 *    and so on, should have suffixes from the following group of suffixes
 *    ["st", "nd", "rd"]. All the numbers like 11, 12, 13, etc and 24, 36, 47
 *    and so on, should have the "th" suffix at the end of their corresponding
 *    string representations.
 *    Thus, we have to extract a ten-part from the century number and then do 
 *    the following:
 *      - test whether the ten-part is bigger than 3 and less than 20
 *      - if so, then return a default suffix which is "th"
 *      - otherwise, extract the last digit from the ten-part
 *      - test whether the last digit falls into a group of 1, 2 or 3
 *      - if it does, then return a corresponding suffix (e.g., 'st' for 1)
 *      - otherwise, return a default suffix which is `th`
 */

function getSuffix(centuryNum) {
  let tenPart = (centuryNum % 100);
  // NOTE: it should retun "th" if a century ends with either 11, 12 or 13
  if ([11, 12, 13].includes(tenPart)) return 'th';

  switch (tenPart % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function century(num) {
  let centuryNum = Math.ceil(num / 100);
  return String(centuryNum).concat(getSuffix(centuryNum));
}

console.log(century(2000));
console.log(century(2001));
console.log(century(1965));
console.log(century(256));
console.log(century(5));
console.log(century(10103));
console.log(century(1052));
console.log(century(1127));
console.log(century(11201));
console.log(century(2101));
console.log(century(220243));