function filterPrimes(arr) {
  function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
  return arr.filter(isPrime);
}

console.log(filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));