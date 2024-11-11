function twoOldestAges(ages){

  const [firstNumber, secondNumber] = ages.sort((a, b) => b - a);

  let result = [];

  result.push(secondNumber);
  result.push(firstNumber);

  return result;

}


console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));