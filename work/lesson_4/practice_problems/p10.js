// Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

// A: it's a naive solution
Object.values(ages).sort()[0];

// It's a better one
Math.min(Object.values(ages));
