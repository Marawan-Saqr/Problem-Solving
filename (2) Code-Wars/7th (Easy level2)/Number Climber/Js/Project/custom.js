function climb(n) {
  const sequence = [];
  while (n >= 1) {
    sequence.push(n);
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = (n - 1) / 2;
    }
  }
  return sequence.reverse();
}

console.log(climb(13));
