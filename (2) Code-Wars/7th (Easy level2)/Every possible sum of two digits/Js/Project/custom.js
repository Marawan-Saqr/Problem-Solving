function digits(num){

  let arrayOfNumbers = num.toString().split("").map((element)=> Number(element));

  let result = [];
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let j = i + 1; j < arrayOfNumbers.length; j++) {
      result.push(arrayOfNumbers[i] + arrayOfNumbers[j]);
    }
  }

  return result;

}



console.log(digits(12345));