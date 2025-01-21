function sumTriangularNumbers(n) {

  if (n < 0) {
    return 0;
  }

  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += (i * (i + 1)) / 2;
  }

  return result;

}



console.log(sumTriangularNumbers(6));