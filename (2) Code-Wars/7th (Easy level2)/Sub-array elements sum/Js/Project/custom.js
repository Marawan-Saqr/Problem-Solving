function elementsSum(arr, d = 0) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= arr.length - i) {
      result += arr[i][arr.length - i - 1];
    } else {
      result += d;
    }
  }

  return result;

}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));