function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr === []) {
      result = 0;
    } else if (arr[i] > 0) {
      result += arr[i];
    } else {
      continue;
    }
  }
  return result;
}


console.log(positiveSum([1, -2, 3, 4, 5]));