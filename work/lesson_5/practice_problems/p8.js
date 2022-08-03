// Q: Using the forEach method, write some code to output all vowels from
//    the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Object.values(obj).forEach(strings => {
  let vowels = [];
  strings.forEach(string => {
    let temp = string.split('').filter(char => 'aeiouy'.includes(char));
    vowels.push([...temp]);
  });
  console.log(`- ${vowels.join()}`);
});