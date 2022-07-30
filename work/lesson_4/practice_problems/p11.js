// Create an object that expresses the frequency with which each letter
// occurs in this string:

let statement = "The Flintstones Rock";
const counter = {};

statement.split(' ').forEach((word) => {
  word.split('').forEach((char) => {
    if (char in counter) {
      counter[char] += 1;
    } else {
      counter[char] = 1;
    }
  });
});