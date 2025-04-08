const students = {
  name: "Omar",
  age: 21,
  grades: [80, 90, 75]
}


//Keys & Values
for (let student in students) {
  console.log(student + ": " + students[student]);
}


// Medium Of Grades
let result = 0;
for (let grade of students.grades) {
  result += grade;
}

console.log(result / students.grades.length);