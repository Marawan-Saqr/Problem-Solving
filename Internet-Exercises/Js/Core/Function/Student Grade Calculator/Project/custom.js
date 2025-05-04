function calculateAverage(scores) {

  let result = 0;
  for (let i = 0; i < scores.length; i++) {
    result += scores[i] / scores.length;
  }

  return result;

}



function calculateFinalGrade(assignments, quizzes, exams) {

  let assignmentAverage = calculateAverage(assignments);
  let quizAverage = calculateAverage(quizzes);
  let examAverage = calculateAverage(exams);

  const finalGrade = 0.4 * assignmentAverage + 0.3 * quizAverage + 0.3 * examAverage;

  let finalResult = displayGrade(finalGrade);
  return finalResult;

}

console.log(calculateFinalGrade([85, 90, 78], [80, 85, 88], [90, 92]));



function displayGrade(finalGrade) {
  if (finalGrade >= 90 ) {
    return "Excellent";
  } else if (finalGrade > 70 && finalGrade < 89) {
    return "Good";
  } else {
    return "Needs Improvement";
  }
}