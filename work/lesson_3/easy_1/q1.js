// Q: Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// A: No, it won't.
//    All the unmentioned indices, between 3 and 5, will be populated by `undefined` 
