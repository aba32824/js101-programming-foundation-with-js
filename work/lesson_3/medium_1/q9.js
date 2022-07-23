// Q: Examine the following function declaration and 
//    answer what it returns when it's being executed.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

// A: it returns `paper`
/**
 * rps(
 *   rps(
 *     rps("rock", "paper"),   // A => paper
 *     rps("rock", "scissors") // B => rock
 *    ),     // C => paper                
 *  "rock")  // D => paper
 */