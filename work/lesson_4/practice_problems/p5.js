// Q: What is the callback's return value in the following code?
//    Also, what is the return value of every in this code?

[1, 2, 3].every(num => {
  return num = num * 2;
});

// A: The callback's value is a product of each number and 2.
//    The result of the above operation considered as a truthy value.
//    The method `each` returns an array that filled in with 3 `true` items.

// WARN: `each` return either `true` or `false`. So, it returns `true` for
//        the above scenario!!!