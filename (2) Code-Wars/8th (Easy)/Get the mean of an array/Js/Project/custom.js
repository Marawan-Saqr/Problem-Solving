function getAverage(marks){

  let result = 0;
  let average = 0;

  for (let i = 0; i < marks.length; i++) {
    result += marks[i];
  }

  average = result / marks.length;

  return Math.floor(average);

}

console.log(getAverage([1,1,1,1,1,1,1,2]));