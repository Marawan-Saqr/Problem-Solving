function countPositivesSumNegatives(input) {

  if (input == null || input.length === 0) {
    return [];
  }

  let numberOfPositives = 0;
  let sumOfNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      numberOfPositives++;
    } else if (input[i] < 0) {
      sumOfNegatives += input[i];
    }
  }

  return [numberOfPositives, sumOfNegatives];

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));