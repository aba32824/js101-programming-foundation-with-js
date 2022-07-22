// The following function unnecessarily uses two return statements
// to return boolean values. Can you rewrite this function so it
// only has one return statement and does not explicitly use either
// true or false?

// NOTE: original function
function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// NOTE: updated version A
function isColorValidUpdatedA(color) {
  return color === "blue" || color === "green";
}

// NOTE: updated version B
function isColorValidUpdatedB(color) {
  return ["blue", "green"].includes(color);
}

