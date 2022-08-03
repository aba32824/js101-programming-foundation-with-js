// Q: Given the following code, what will the final values of a and b be?
//    Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];

arr[0] += 2;
arr[1][0] -= a;

// A: The value of `a` will be the same (i.e., 2).
//    The value of `b` will be changed to [5, 6]
// WARN: `b` will be changed to [3, 8]