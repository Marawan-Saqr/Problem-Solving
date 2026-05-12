function mergeArrays(arr1, arr2) {
  let oneArray = arr1.concat(arr2);
  let result = [...new Set(oneArray)].sort((a, b)=> a - b);
  return result;
}



console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));