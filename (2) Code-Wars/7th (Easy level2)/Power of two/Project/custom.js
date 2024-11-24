function isPowerOfTwo(n) {

  if (n <= 0) return false;

  let counter = 0;
  while (n > 1) {
    if (n % 2 !== 0) return false;
    n = n / 2;
    counter++;
  }

  return true;

}

console.log(isPowerOfTwo(1024));