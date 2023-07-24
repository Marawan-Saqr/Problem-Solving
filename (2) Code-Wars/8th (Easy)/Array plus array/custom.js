// First Solution
function arrayPlusArray(arr1, arr2) {
  let newArrays = arr1.concat(arr2);
  let result = 0;
  for (let i = 0; i < newArrays.length; i++) {
    result += newArrays[i];
  }
  return result;
}


console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));






// Second Solution
function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i] + arr2[i];
  }
  return result;
}


console.log(arrayPlusArray([1, 2, 3], [1, 2, 3]));







