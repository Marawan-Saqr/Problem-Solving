function average(scores) {

  let sum = scores.reduce((acc, curr) => acc + curr, 0);
  let average = sum / scores.length;

  return Math.round(average);

}



console.log(average([90, 98, 89, 100, 100, 86, 94]));