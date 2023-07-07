function sumOdd(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2 === 0)) {
      result += arr[i];
    } 
  }
  return result;
}


console.log(sumOdd([3, 12, 6]));