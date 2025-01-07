function minMax(arr) {

  let minNumber = Math.min(...arr);
  let maxNumber = Math.max(...arr);

  let result = [minNumber, maxNumber];

  return result;

}


console.log(minMax([1, 2, 3, 4, 5]));