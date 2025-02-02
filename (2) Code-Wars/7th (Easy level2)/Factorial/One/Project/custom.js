function factorial(n) {
  if (n < 0 || n > 12) {
    throw new Error("Input must be a non-negative integer and less than or equal to 12.");
  }

  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

try {
  console.log(factorial(5));
} catch (e) {
  console.error(e.message);
}