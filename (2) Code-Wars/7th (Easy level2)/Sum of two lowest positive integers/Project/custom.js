function sumTwoSmallestNumbers(numbers) {  

  const [firstLowest, secondLowest] = numbers.sort((a, b) => a - b);

  return firstLowest + secondLowest;

}


console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));