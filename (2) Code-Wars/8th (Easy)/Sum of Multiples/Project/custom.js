function sumMul(n, m){

  if (n <= 0 || m <= 0) {
    return "INVALID";
  }

  let result = 0;

  for (let i = n; i < m; i+= n) {
    result += i;
  }

  return result;

}

console.log(sumMul(2, 9));