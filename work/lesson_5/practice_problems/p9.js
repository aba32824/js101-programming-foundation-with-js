// Given the following data structure, return a new array with
// the same structure, but with the values in each subarray ordered -- 
// alphabetically or numerically as appropriate -- in ascending order.

let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let newArr = [];
arr.forEach(list => {
  let temp = list.slice();
  temp.sort((a, b) => {
    if (Number.isInteger(a) && Number.isInteger(b)) {
      return a - b;
    } else {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
  });
  newArr.push(temp);
});

console.log(newArr);

// Another way to do so

let newArr2 = arr.map(list => {
  if (typeof list[0] === 'string') {
    return list.slice().sort();
  } else {
    return list.slice().sort((a, b) => a - b);
  }
});

console.log(newArr2);