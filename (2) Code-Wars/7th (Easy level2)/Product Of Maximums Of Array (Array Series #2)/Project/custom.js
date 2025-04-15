function maxProduct(numbers, size){

  let sorted = numbers.sort((a, b)=> a - b);
  let bigNumbersOfSize = sorted.slice(-size);
  let result = bigNumbersOfSize.reduce((acc, current)=> acc * current, 1);

  return result;

}


console.log(maxProduct([10, 8, 3, 2, 1, 4, 10], 5));