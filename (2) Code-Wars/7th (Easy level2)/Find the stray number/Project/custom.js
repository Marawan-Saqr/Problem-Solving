function stray(numbers) {
  return numbers.reduce((a, b) => a ^ b);
}

console.log(stray([1, 2, 2, 2, 2]));