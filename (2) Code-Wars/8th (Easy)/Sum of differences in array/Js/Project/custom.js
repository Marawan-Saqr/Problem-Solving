function sumOfDifferences(arr) {

  let sorted = arr.sort((a, b)=> b - a);  // [10, 2, 1]
  let result = 0;


  for (let i = 0; i < sorted.length - 1; i++) {
    result += sorted[i] - sorted[i + 1];
  }

  return result;


}




console.log(sumOfDifferences([-3, -2, -1]));