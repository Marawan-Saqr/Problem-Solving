function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}



function getPrimesBetween(a, b) {
  let primes = [];
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}




console.log(getPrimesBetween(1, 10));





