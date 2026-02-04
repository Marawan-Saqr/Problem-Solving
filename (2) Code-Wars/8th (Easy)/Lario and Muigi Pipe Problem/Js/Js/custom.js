function pipeFix(numbers) {

  let minNumbers = Math.min(...numbers);
  let maxNumbers = Math.max(...numbers);
  let result = [];

  for (let i = minNumbers; i <= maxNumbers; i++) {
    result.push(i);
  }

  return result;

}

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]));