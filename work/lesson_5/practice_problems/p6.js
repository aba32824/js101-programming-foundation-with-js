// Given this previously seen family object, print 
// the name, age, and gender of each family member.
// Each output line should follow this pattern:
//
//   (Name) is a (age)-year-old (male or female).

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach((name) => {
  let capName = name[0].toUpperCase() + name.split('').slice(1).join('');
  console.log(`${capName} is a ${munsters[name].age}-year-old (${munsters[name].gender})`)
});
