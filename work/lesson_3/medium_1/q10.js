// Q: Consider these two simple functions and answer what the next line returns?

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));

// A: it returns `no`