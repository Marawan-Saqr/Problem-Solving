function betterThanAverage(classPoints, yourPoints) {
  let classGrades = 0;
  let classAverage = 0;
  for (let i = 0; i < classPoints.length; i++) {
    classGrades += classPoints[i];
  }
  classAverage = classGrades / classPoints.length;
  if (classAverage > yourPoints) {
    return false;
  } else {
    return true;
  }
}



console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));










