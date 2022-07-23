/**
 * For this practice problem, write a program that outputs
 *   The Flintstones Rock!
 * 10 times, with each line indented 1 space to the right of the line above it.
 * The output should start out like this:
 *   The Flintstones Rock!
 *    The Flintstones Rock!
 *     The Flintstones Rock!
 */

let maxCount = 10;
const text = 'The Flintstones Rock!';

for (let i = 1; i <= maxCount; i++) {
  let spaces = ' '.repeat(i);
  console.log(`${spaces}${text}`);
}