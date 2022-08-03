// Write a function that takes no arguments and returns a string 
// that contains a UUID.

// Each UUID consists of 32 hexadecimal characters 
// (the digits 0-9 and the letters a-f) represented as a string. 
// The value is typically broken into 5 sections in an 8-4-4-4-12 pattern.
// E.g., 'f65c57f6-a6aa-17a8-faa1-a67f2dc9fa91'.

function getArrayOfCharIds(arraySize, startCharId) {
  return Array.from(new Array(arraySize), (x, i) => i + startCharId);
}

function getArrayOfNums() {
    // for ASCII numbers (i.e., 0-9)
    const NUM_START = 48;
    const NUM_ARRAY_SIZE = 10;

    return getArrayOfCharIds(NUM_ARRAY_SIZE, NUM_START);
}

function getArrayOfChars() {
  // for ASCII characters (i.e., a-f)
  const CHAR_START = 97;
  const CHAR_ARRAY_SIZE = 6;

  return getArrayOfCharIds(CHAR_ARRAY_SIZE, CHAR_START);
}

function getRandomSubstr(substrLen) {
  let charIds = [];
  // getting array of numeric IDs
  charIds.push(...getArrayOfNums());
  // getting array of character IDs
  charIds.push(...getArrayOfChars());
  // shuffle array and get 
  charIds.sort(() => 0.5 - Math.random());
  return charIds.slice(0, substrLen).map(id => String.fromCharCode(id)).join('');
}

function getUUID() {
  const parts = [8, 4, 4, 4, 12];
  return parts.map(part => getRandomSubstr(part)).join('-');
}

console.log(getUUID());
console.log(getUUID());