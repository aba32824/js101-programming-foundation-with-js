// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1); // [{ first: "value1" }, { second: "value2" }, 3, 4, 5];

// the first array won't be changed because the second array
// is not a reference to the first.
// NOTE: that's wrong because of the fact that `slice` makes shallow copies :(