// Q: Given the following similar sets of code, what will each code snippet print?

// A) - WARN: the answer is wrong, a simple assignment `=` does not mutate the array
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);     // => "two" 
console.log(`two is: ${two}`);     // => "three"
console.log(`three is: ${three}`); // => "two"

// B) - WARN: the answer is wrong, a simple assignment `=` does not mutate the array
function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);     // => "two"
console.log(`two is: ${two}`);     // => "three"
console.log(`three is: ${three}`); // => "one"

// C)
function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

one = ["one"];
two = ["two"];
three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);      // => "two"
console.log(`two is: ${two}`);      // => "three"
console.log(`three is: ${three}`);  // => "one"