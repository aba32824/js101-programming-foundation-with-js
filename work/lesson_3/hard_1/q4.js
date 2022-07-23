// To examine and fix a simple JavaScript function that determines
// whether an input string is an IP address using 4 dot-separated
// numbers, e.g., 10.4.5.11

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }
  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

function isDotSeparatedIpAddressUpdated(inputStr) {
  const maxSize = 4;
  let ipWords = inputStr.split(".");
  // To fix the case when the input string has more or less than 4 words
  if (ipWords.length !== maxSize) {
    return false;
  }

  while (ipWords.length) {
    let word = ipWords.pop();
    if (!isAnIpNumber(word)) return false;
  }

  return true;
}

let okIp = '10.10.1.1';
let badIp = '2.3.4';

console.log(`is IP addr. ${okIp} correc? ${isDotSeparatedIpAddressUpdated(okIp)}`);
console.log(`is IP addr. ${badIp} correc? ${isDotSeparatedIpAddressUpdated(badIp)}`);