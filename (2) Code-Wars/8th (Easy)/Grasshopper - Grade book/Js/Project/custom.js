function getGrade (s1, s2, s3) {

  let gradesArray = [];
  gradesArray.push(s1, s2, s3);

  let sum = gradesArray.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  let averageResult = Math.round(sum / gradesArray.length);

  if (averageResult >= 90 && averageResult <= 100) {
    return "A";
  } else if (averageResult >= 80 && averageResult <= 90 ) {
    return "B";
  } else if (averageResult >= 70 && averageResult <= 80) {
    return "C";
  } else if (averageResult >= 60 && averageResult <= 70) {
    return "D";
  } else if (averageResult >= 0 && averageResult < 60) {
    return "F";
  }

}

console.log(getGrade(95, 90, 93));