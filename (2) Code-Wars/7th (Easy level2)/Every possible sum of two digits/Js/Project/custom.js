function digits(num){

  let convertToString = num.toString();
  let splited = convertToString.split("");

  let newNumbers = [];

  for (let i = 0; i < splited.length; i++) {
    newNumbers.push(parseInt(splited[i]));          // [1, 2, 3, 4, 5]
  }

  let finalResult = [];

  for (let j = 0; j < newNumbers.length; j++) {
    for (let k = j + 1; k < newNumbers.length; k++) {
      finalResult.push(newNumbers[j] + newNumbers[k]);
    }
  }

  return finalResult;

}

console.log(digits(12345));