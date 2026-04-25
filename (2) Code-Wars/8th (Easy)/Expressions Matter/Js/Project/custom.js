function expressionMatter(a, b, c) {

  let firstMethod = a * (b + c);
  let secondMethod = a * b * c;
  let thirdMethod = a + b * c;
  let fourthMethod = (a + b) * c;
  let fifthMethod = a + b + c;
  let numbersArray = [];
  numbersArray.push(firstMethod, secondMethod, thirdMethod, fourthMethod, fifthMethod);

  return Math.max(...numbersArray);

}

console.log(expressionMatter(1, 1, 1));