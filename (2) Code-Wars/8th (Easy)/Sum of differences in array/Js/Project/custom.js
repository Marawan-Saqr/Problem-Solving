function sumOfDifferences(arr) {

  if (arr.length <= 1) {
    return 0;
  }

  let sorted = arr.sort((a, b) => b - a); // [10, 2, 1]
  let result = 0;

  for (let i = 0; i < sorted.length - 1; i++) {
    result += arr[i] - arr[i + 1];
  }

  return result;

}

console.log(sumOfDifferences([2, 1, 10]));