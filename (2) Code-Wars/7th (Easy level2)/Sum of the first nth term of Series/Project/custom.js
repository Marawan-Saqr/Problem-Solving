function SeriesSum(n) {

  let result = 0;
  let denominator = 1;

  for (let i = 0; i < n; i++) {
    result += 1 / denominator;
    denominator += 3;
  }

  return result.toFixed(2);

}

console.log(SeriesSum(2));
