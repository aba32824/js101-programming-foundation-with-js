// Q: What is the output of the following code?

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// A: I tend to think that the very last line outputs `42`.
// WARN: I did not pay attention to the second variable named `newAnswer` :(