function largestPairSum(numbers) {

  let sorted = numbers.sort((a, b)=> b - a);

  const [numOne, numTwo] = sorted;

  let result = numOne + numTwo;

  return result;


}



console.log(largestPairSum([10, 14, 2, 23, 19]));