function gradeCheck(grade) {
  if (grade >= 90 && grade <= 100) {
    return `your grade ${grade} is (A)`;
  } else if (grade >= 80 && grade <= 89) {
    return `your grade ${grade} is (B)`;
  } else if (grade >= 70 && grade <= 79) {
    return `your grade ${grade} is (C)`;
  } else if (grade >= 60 && grade <= 69) {
    return `your grade ${grade} is (D)`;
  } else {
    return `your grade ${grade} is (F)`;
  }
}


console.log(gradeCheck(100));
console.log(gradeCheck(80));
console.log(gradeCheck(70));
console.log(gradeCheck(60));
console.log(gradeCheck(50));