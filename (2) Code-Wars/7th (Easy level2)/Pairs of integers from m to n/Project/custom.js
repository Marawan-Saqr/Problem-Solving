function generatePairs(m, n) {

  if (m > n) {
    return false;
  }

  let result = [];

  for (let i = m; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      result.push([i, j]);
    }
  }

  return result;

}

console.log(generatePairs(2, 4));