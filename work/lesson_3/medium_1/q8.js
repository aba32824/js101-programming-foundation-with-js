// Q: See the below code and try to answer whether the function changes
// the orginal object or not?

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

// A: The data is going to be mingled. The point is that in JS objects are
//    passed by their references to a function. However, the incomming object
//    could be replaced by some other object. 