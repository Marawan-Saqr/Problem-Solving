function squareSum(numbers) {

  let squareSum = numbers.reduce((acc, current)=> {
    return acc + Math.pow(current, 2);
  }, 0);

  return squareSum;

}




console.log(squareSum([1, 2, 2]));