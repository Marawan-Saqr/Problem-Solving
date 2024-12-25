let students = [
  { name: "Marawan", score: 43 },
  { name: "Mohmed", score: 40 },
  { name: "Yassmina", score: 20 },
  { name: "Ahmed", score: 60 },
];

let result = students.filter((student) => {
  return student.score > 50
});

console.log(result);