// Write three different ways to remove all of the elements
// from the following array:

let numbers = [1, 2, 3, 4];
// 1 - to empty the array by assigning a new one
numbers = [];
console.log(numbers);

// 2 - set its property length to be equal `zero`
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);

// 3 - to slice all the items
numbers = [1, 2, 3, 4];
while (numbers.length) {
  numbers.pop();
}
console.log(numbers);