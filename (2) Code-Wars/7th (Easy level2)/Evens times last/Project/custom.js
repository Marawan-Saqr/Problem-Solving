function evenLast(numbers) {

  if (numbers.length === 0) {
    return 0;
  }

  let lastNumber = numbers[numbers.length - 1];
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      result += numbers[i];
    }
  }

  return result * lastNumber;

}


console.log(evenLast([2, 2, 2, 2, 3]));