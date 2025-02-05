const sumAverage = (arr) => {

  let result = [];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum += arr[i][j];
    }
    avg = sum / arr[i].length;
    result.push(avg);
  }

  let finalResult = result.reduce((acc, current)=> {
    return acc + current;
  }, 0)

  return Math.floor(finalResult);

}



console.log(sumAverage([[3, 4, 1, 3, 5, 1, 4], [21, 54, 33, 21, 77]]));