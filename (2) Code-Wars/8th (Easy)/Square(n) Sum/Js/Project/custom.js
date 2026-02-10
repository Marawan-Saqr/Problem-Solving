function squareSum(numbers) {

  let sum = numbers.map((element)=> {
    return Math.pow(element, 2);
  });

  let result = sum.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}


console.log(squareSum([1, 2, 2]));