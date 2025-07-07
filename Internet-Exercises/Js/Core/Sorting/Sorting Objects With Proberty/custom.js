const students = [
  { name: "Sara", grade: 88 },
  { name: "Ali", grade: 75 },
  { name: "Omar", grade: 92 },
  { name: "Nora", grade: 85 }
];


// Sort Grades From Small To Big
let gradesAscending = [...students].sort((a, b)=> a.grade - b.grade);
console.log(gradesAscending);


// Sort Grades From Big To Small
let gradesDescending = [...students].sort((a, b)=> b.grade - a.grade);
console.log(gradesDescending);


// Sort Students Names
let studentsNames = [...students].sort((a, b) => a.name.localeCompare(b.name));
console.log(studentsNames);