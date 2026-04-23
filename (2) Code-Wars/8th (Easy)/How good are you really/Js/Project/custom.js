function betterThanAverage(classPoints, yourPoints) {

  let classSums = classPoints.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  let classAverage = classSums / classPoints.length;

  return classAverage < yourPoints ? true : false;

}



console.log(betterThanAverage([2, 3], 5));