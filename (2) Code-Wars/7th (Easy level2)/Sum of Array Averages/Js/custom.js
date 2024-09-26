const sumAverage = (arr) => {

  let finalResult = 0;

  for (let i = 0; i < arr.length; i++) {
    let subArraySum = 0;
    
    for (let j = 0; j < arr[i].length; j++) {
      subArraySum += arr[i][j];
    }

    let subArrayAverage = subArraySum / arr[i].length;
    finalResult += subArrayAverage;
  }

  return Math.floor(finalResult);

}

console.log(sumAverage([[-4, 3, -8, -2], [2, 9, 1, -5], [-7, -2, -6, -4]]));
