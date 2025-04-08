function findUnique(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result ^= numbers[i];
  }
  return result;
}

console.log(findUnique([1, 8, 4, 4, 6, 1, 8]));