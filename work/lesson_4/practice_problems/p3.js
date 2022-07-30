// Q: The following code differs slightly from the above code. 
//    What is the return value of map in this case? Why?

[1, 2, 3].map(num => num * num);

// A: The above code returns an array fulfilled with 3 items which
//    are products of the multiplication (i.e., n * n).
//    The callback is a one-liner; thus, it does not need the return statement.