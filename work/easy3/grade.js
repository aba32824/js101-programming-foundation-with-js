/**
 * Write a function that determines the mean (average) of the three scores
 * passed to it, and returns the letter associated with that grade.
 * Numerical score letter grade list:
 *  90 <= score <= 100: 'A'
 *  80 <= score < 90: 'B'
 *  70 <= score < 80: 'C'
 *  60 <= score < 70: 'D'
 *  0  <= score < 60: 'F'
 * 
 * Tested values are all between 0 and 100. There is no need to check for 
 * negative values or values greater than 100.
 */

const GRADE_MAP = {
  A: (grade) => grade >= 90,
  B: (grade) => grade >= 80,
  C: (grade) => grade >= 70,
  D: (grade) => grade >= 60,
  F: (grade) => grade < 60,
};

function getGrade(grade1, grade2, grade3) {
  let mean = (grade1 + grade2 + grade3) / 3;
  for (let key in GRADE_MAP) {
    if (GRADE_MAP[key](mean)) return key;
  }
}

function getGradeUpdated(...grades) {
  let mean = grades.reduce((grade, acc) => acc + grade) / grades.length;
  for (const [key, func] of Object.entries(GRADE_MAP)) {
    if (func(mean)) return key;
  }
}

console.log(getGradeUpdated(95, 90, 93));    // "A"
console.log(getGradeUpdated(50, 50, 95));    // "D"
console.log(getGradeUpdated(50, 50, 43));    // "F"
console.log(getGradeUpdated(60, 70, 80));    // "C"