// Is there a difference between these implementations, other than 
// the method is used to add an element to the buffer?

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

// A: The first implementation mutates the argument that comes in the function.
//    The second option does not do it. It returns a copy of an array.

let array = Array.from(Array(10).keys());
console.log(array);

// The first option
let buffer = [];
array.forEach(item => {
  addToRollingBuffer1(buffer, 5, item);
});
console.log(buffer);

// The second option
buffer = [];
array.forEach(item => {
  addToRollingBuffer2(buffer, 5, item);
});
console.log(buffer);