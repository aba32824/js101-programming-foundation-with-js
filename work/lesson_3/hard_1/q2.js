// Q: What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// A: I tend to think the object will be changed. Thus, the last line has
//    to reflect the fact that the array was changed on line No. 4