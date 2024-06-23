function getAverage(marks) {

  let result = 0;

  for (let i = 0; i < marks.length; i++) {
    result += marks[i];
  }

  let downResult = result / marks.length;
  return downResult;

}

console.log(getAverage([2, 2, 2, 2]));