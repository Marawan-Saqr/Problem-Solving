function averages(numbers) {

  if (!numbers || numbers.length === 0 || numbers.length === 1) {
    return [];
  }

  let result = [];

  let numbersLength = numbers.length;

  for (let i = 0; i < numbersLength - 1; i++) {
    result.push((numbers[i] + numbers[i + 1]) / 2);
  }

  return result;

}



console.log(averages([1, 3, 5, 1, -10]));