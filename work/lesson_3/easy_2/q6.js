// Suppose we have an array like this:
//    ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
// Create a new array that contains all of the above values,
// but in an un-nested format.

let array = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];
let newArray = [].concat(...array);
console.log(newArray);

let otherArray = array.reduce((acc, item) => {
  return acc.concat(item);
}, []);
console.log(otherArray);