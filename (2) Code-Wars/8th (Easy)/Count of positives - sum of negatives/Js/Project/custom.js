function countPositivesSumNegatives(input) {

  if (input == null || input.length === 0) {
    return [];
  }

  let positiveCounter = 0;
  let negativeSum = 0;
  let result = [];

  let sorted = input.sort((a, b)=> {
    if (a >= 0 && b < 0) {
      return -1;
    } else if (a < 0 && b >= 0) {
      return 1;
    }
  });

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] > 0) {
      positiveCounter++;
    } else {
      negativeSum += sorted[i];
    }
  }

  result.push(positiveCounter, negativeSum);
  return result;

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));