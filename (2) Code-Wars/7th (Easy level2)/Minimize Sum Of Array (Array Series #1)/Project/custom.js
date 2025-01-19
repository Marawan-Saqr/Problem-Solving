function minSum(arr) {

  let sorted = arr.sort((a, b)=> a - b);
  let result = 0;

  for (let i = 0; i < sorted.length / 2; i++) {
    result += sorted[i] * sorted[sorted.length - 1 - i];
  }

  return result;

}



console.log(minSum([5, 4, 2, 3]));