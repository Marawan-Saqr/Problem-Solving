function arrayPlusArray(arr1, arr2) {

  let concated = arr1.concat(arr2);
  let result = 0;

  for (let i = 0; i < concated.length; i++) {
    result += concated[i];
  }

  return result;

}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));