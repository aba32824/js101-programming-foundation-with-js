/**
 * Given a string that consists of some words and an assortment of
 * non-alphabetic characters, write a function that returns that string
 * with all of the non-alphabetic characters replaced by spaces.
 * If one or more non-alphabetic characters occur in a row, you should only
 * have one space in the result (i.e., the result string should never
 * have consecutive spaces).
 */

const START_CODE = 'a'.codePointAt();
const END_CODE = 'z'.codePointAt();

function cleanUp(text) {
  return text.replace(/\W+/g, ' ');
}

function getCharOrSpace(char) {
  let charCode = char.toLowerCase().codePointAt();
  return (charCode >= START_CODE && charCode <= END_CODE) ? char : ' ';
}

function reduceSpaces(word) {
  return word.replace(/\s+/g, ' ');
}

function cleanUpNoRegex(text) {
  let cleanWords = [];
  text.split(' ').forEach(word => {
    let cleanChars = word.split('').map(char => getCharOrSpace(char)).join('');
    if (cleanChars.trim()) cleanWords.push(reduceSpaces(cleanChars));
  });
  return cleanWords.join(' ');
}

function cleanUpNoRegexVer2(text) {
  let cleanText = '';
  text.split(' ').forEach(word => {
    let cleanChars = word.split('').map(char => getCharOrSpace(char)).join('');
    cleanText = cleanText.concat(' ', cleanChars);
  });
  return reduceSpaces(cleanText);
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "
console.log(cleanUpNoRegex("---what's my +*& line?"));    // " what s my line "
console.log(cleanUpNoRegexVer2("---what's my +*& line?")); 
console.log(cleanUpNoRegex("   foo 1234 ba**z aNd b00r"));