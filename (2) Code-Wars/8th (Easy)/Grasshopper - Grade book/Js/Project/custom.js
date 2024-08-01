function getGrade (s1, s2, s3) {

  let gradesArray = [];
  gradesArray.push(s1);
  gradesArray.push(s2);
  gradesArray.push(s3);

  let average = (s1 + s2 + s3) / gradesArray.length;

  console.log(average)

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }

}

console.log(getGrade(95, 90, 93));