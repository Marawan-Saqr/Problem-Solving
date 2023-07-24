function twoArePositive(a, b, c) {
  let positiveCount = 0;

  // Check if each integer is positive and increment the count if positive
  if (a > 0) {
    positiveCount++;
  }
  if (b > 0) {
    positiveCount++;
  }
  if (c > 0) {
    positiveCount++;
  }

  return positiveCount === 2;
}

console.log(twoArePositive(1, 2, -1));