// Q: Determine whether the name Dino appears in the strings below
//     -- check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// A: it could be done via String.prototype.includes

let what = 'Dino';
str1.includes(what); // false
str2.includes(what); // true