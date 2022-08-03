// Perform the same transformation of sorting the subarrays
// we did in the previous exercise with one difference;
// sort the elements in descending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = arr.map(list => {
  if (typeof list[0] === 'string') {
    return list.slice().sort().reverse();
  } else {
    return list.slice().sort((a, b) => b - a);
  }
});

console.log(newArr);