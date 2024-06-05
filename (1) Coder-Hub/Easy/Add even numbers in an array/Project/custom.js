function sum_even(arr) {

  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result += arr[i];
    }
  }

  return result;
}

console.log(sum_even([11, 0, 5, 22]));