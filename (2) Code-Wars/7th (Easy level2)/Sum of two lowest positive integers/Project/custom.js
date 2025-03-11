function sumTwoSmallestNumbers(numbers) {

  let sorted = numbers.sort((a, b)=> a - b);
  const [a, b] = sorted;
  return a + b;

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]));