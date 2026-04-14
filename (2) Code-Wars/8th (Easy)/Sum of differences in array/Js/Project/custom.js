function sumOfDifferences(arr) {

  let sumMinus = [];
  let sorted = arr.sort((a, b)=> b - a);  // [10, 2, 1]

  for (let i = 0; i < sorted.length - 1; i++) {
    sumMinus.push(sorted[i] - sorted[i + 1]);
  }

  let result = sumMinus.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}


console.log(sumOfDifferences([1, 2, 10]));