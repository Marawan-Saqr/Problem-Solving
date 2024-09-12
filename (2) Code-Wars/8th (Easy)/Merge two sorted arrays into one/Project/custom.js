function mergeArrays(arr1, arr2) {

  let concated = arr1.concat(arr2);
  let sorted = concated.sort((a, b) => a - b);

  let uniqueSorted = [...new Set(sorted)];
  return uniqueSorted;

}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));