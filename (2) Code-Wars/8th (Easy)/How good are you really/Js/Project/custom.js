function betterThanAverage(classPoints, yourPoints) {

  let result = 0;

  for (let i = 0; i < classPoints.length; i++) {
    result += classPoints[i];
  }

  let classAverage = result / classPoints.length;

  if (yourPoints > classAverage) {
    return true;
  } else {
    return false;
  }

}



console.log(betterThanAverage([2, 3], 5));