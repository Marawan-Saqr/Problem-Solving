function nearestSq(n) {
  let sqrt_n = Math.round(Math.sqrt(n));

  if (sqrt_n * sqrt_n === n) {
    return n;
  }

  let lowerSq = sqrt_n * sqrt_n;
  let upperSq = (sqrt_n + 1) * (sqrt_n + 1);

  if (n - lowerSq < upperSq - n) {
    return lowerSq;
  } else {
    return upperSq;
  }
}