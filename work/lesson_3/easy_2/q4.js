// Starting with the string:
//    let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.

let famousWords = "seven years ago...";
let newString1 = String("Four score and ").concat(famousWords);
console.log(newString1);

let newString2 = "Four score and " + famousWords;
console.log(newString2);
