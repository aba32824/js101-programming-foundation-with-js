// Take a look at the following array.

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

// Write a program that uses this array to create an object where the names
// are the keys and the values are the positions in the array:

function getObject(list) {
  const obj = {};
  list.forEach((item, idx) => {
    obj[item] = idx;
  });
  return obj;
}
