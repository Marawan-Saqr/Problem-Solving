function differenceOfSquares(n) {

  let squareSum = 0;
  for (let i = 1; i <= n; i++) {
    squareSum+= i;
  }
  let squareSumPower = Math.pow(squareSum, 2);


  let sumSquares = 0;
  for (let i = 0; i <= n; i++) {
    sumSquares+= Math.pow(i, 2);
  }

  return squareSumPower - sumSquares;

}



console.log(differenceOfSquares(10));