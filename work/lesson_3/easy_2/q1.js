// Q: Given a string, return a new string that replaces every occurrence of 
//    the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

// A: it could be done via String.prototype.replaceAll()

advice.replaceAll('important', 'urgent');