function sum(numbers) {

  if (numbers.length === 0) {
    return 0;
  }

  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }

  return result;

}

console.log(sum([1, 5.2, 4, 0, -1]));