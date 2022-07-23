// Q: What do you think the following code will output?

let nanArray = [NaN];
console.log(nanArray[0] === NaN);
// A: The above code outputs `true` to the console
// WARN: The answer is wrong :(
//       The whole point is about NaN which a special case in JS.
//       Each NaN instance is unique and it does not equal to any other.

// Q: How can you reliably test if a value is NaN?
// A: There is a method in the Number class that examines whether
//    a number is NaN or not.

console.log(Number.isNaN(101));

