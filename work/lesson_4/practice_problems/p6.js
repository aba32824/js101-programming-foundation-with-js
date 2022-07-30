// Q: How does Array.prototype.fill work? Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5]
arr.fill(1, 1, 5);

// A: We have to look for it in MDN Documentation website.
//   For example, try to search by Array.prototype.fill() keyword.
//   This methods changes the original array by populating it with
//   its first argument. The outcome is the following:
//    - all the array items are replaced by `1`.

// WARN: By reading the documentation and trying some code in the console,
//       we can determine that fill takes a value and two indices and replaces
//       the indices value in between those two given indices with the given
//       value. We can also verify that it's a destructive method.