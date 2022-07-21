// Consider the following object:
//   let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
// Create an array from this object that contains only two elements:
//   - Barney's name and Barney's number

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barney = [];

for (let [key, value] of Object.entries(flintstones)) {
  if (key === 'Barney') barney.push(key, value);
}

console.log(barney);