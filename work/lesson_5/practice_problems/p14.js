// Given the following data structure write some code to return an array
// containing the colors of the fruits and the sizes of the vegetables.
// The sizes should be uppercase, and the colors should be capitalized.

let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

let newArr = Object.values(obj).map(struct => {
  if (struct.type === 'fruit') {
    return struct.colors.map(color => color[0].toUpperCase() + color.substring(1));
  } else {
    return struct.size.toUpperCase();
  }
});

console.log(newArr);

