function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function primes_nums(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(primes_nums([2, 5, 8, 12, 25]));