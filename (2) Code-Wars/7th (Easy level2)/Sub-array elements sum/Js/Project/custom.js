function elementsSum(arr, d = 0) {

  var sum=0;

  for (var i = 0; i < arr.length; ++i)
    if (arr[i].length >= arr.length - i) {
      sum += arr[i][arr.length - i - 1];
    } else {
      sum += d;
    }

  return sum;

}

console.log(elementsSum([[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]]));