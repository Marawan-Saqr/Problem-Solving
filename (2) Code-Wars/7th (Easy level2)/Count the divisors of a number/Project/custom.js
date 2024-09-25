function getDivisorsCnt(n) {

  let counter = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      counter++;
      if (i !== n / i) {
        counter++;
      }
    }
  }

  return counter;
}

console.log(getDivisorsCnt(54));