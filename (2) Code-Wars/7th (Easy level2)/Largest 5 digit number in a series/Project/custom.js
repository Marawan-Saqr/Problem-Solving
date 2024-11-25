function solution(digits) {

  let arrayOfNumbers = [];
  let digitSequence = "";

  for (let i = 0; i <= digits.length - 5; i++) {
    digitSequence = digits.substring(i, i + 5);
    arrayOfNumbers.push(digitSequence);
  }

  let result = arrayOfNumbers.map(function(element) {
    return parseInt(element);
  })

  return Math.max(...result);

}


console.log(solution("1234567890"));