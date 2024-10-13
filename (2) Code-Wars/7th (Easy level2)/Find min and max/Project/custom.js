function getMinMax(arr){

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let finalResult = [];

  finalResult.push(min);
  finalResult.push(max);

  return finalResult;

}

console.log(getMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));