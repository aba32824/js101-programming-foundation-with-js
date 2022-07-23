// Q: Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

// A: Both functions return the same result.
//    Each function produces an object literally defined in the scope of the function.
//
// WARN: The above answer is wrong because of the second function returns 
//       `undefined`.
//       The reason of it is that the semicolon character `;` is optional
//       and it does not go the following lines where the object is defined.