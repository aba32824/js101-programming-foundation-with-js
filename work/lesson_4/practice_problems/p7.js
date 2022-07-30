// Q: What is the return value of map in the following code? Why?

['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// A: The output should be an array with 2 items: [undefined, 'bear']
//    That happens because the first item does not meet the criteria in
//    `if` clause, so the output contains `undefined. The second item meets
//     it and it is added to the output.