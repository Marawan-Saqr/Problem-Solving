function repeats(arr) {
  const uniqueNumbers = new Set();

  for (const num of arr) {
    if (uniqueNumbers.has(num)) {
      uniqueNumbers.delete(num);
    } else {
      uniqueNumbers.add(num);
    }
  }

  let sum = 0;
  for (const num of uniqueNumbers) {
    sum += num;
  }

  return sum;
}

console.log(repeats([4, 5, 7, 5, 4, 8]));