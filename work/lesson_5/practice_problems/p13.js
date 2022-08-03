// Given the following data structure, sort the array so that the sub-arrays
//  are ordered based on the sum of the odd numbers that they contain.

let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

let newArr = arr.sort((a, b) => {
  let sumA = a.filter(num => num % 2).reduce((acc, i) => acc + i, 0);
  let sumB = b.filter(num => num % 2).reduce((acc, i) => acc + i, 0);
  return sumA - sumB;
});

console.log(newArr);