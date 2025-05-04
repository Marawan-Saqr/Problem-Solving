function sumArray(arr){
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(sumArray([1, 2, 3, 4, 5]));