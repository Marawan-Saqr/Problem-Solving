function getMinMax(arr){

  let minNumbers = Math.min(...arr);
  let maxNumbers = Math.max(...arr);

  return [minNumbers, maxNumbers];

}

console.log(getMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));