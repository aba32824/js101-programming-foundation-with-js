// Q: What is the return value of map in the following code? Why?

[1, 2, 3].map(num => {
  num * num;
});

// A: The output is an array populated by 3 elements,
//    each of which is `undefined`. That happens because
//    a missed statement `return` must be in the callback body.