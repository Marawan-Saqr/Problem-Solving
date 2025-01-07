function nbYear(p0, percent, aug, p) {
  let counter = 0;
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * (percent / 100) + aug);
    counter++;
  }

  return counter;
}

console.log(nbYear(1000, 2.0, 50, 1214));