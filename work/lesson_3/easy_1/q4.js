// Q: Using the following string, create a new string that 
//    contains all lowercase letters except for the first character,
//    which should be capitalized.

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// A: one way to do so could be done via a combination of the following methods:
//    - String.prototype.toUpperCase()[0] - to capitalize the first character
//    - String.prototype.toLowerCase().slice(1,) - to "lowercase" the rest of chars
//    - and then concatenate all the above

let desc = munstersDescription[0].toUpperCase() + munstersDescription.toLowerCase().slice(1,);
