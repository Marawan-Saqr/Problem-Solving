function evenNumbers(n1) {
  let result = " ";
  for (let i = 2; i < n1; i += 2) {
    result += i + " ";
  }
  return result;
}

// Example output:
// 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
console.log(evenNumbers(22));
