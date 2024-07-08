function findDifference(a, b) {

  let resultA = 1;
  let resultB = 1;
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    resultA *= a[i];
  }

  for (let i = 0; i < b.length; i++) {
    resultB *= b[i];
  }

  result = resultA - resultB;

  if (result < 0) {
    return result * -1;
  } else {
    return result;
  }

}

console.log(findDifference([2, 2, 3], [5, 4, 1]));