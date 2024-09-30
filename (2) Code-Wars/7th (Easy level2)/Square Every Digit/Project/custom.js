function squareDigits(num){

  let converted = num.toString().split("");


  let numbersAgain = [];
  if (converted) {
    converted.map(function(e) {
      numbersAgain.push(parseInt(e));
    })
  }


  let mediumResult = [];
  for (let i = 0; i < numbersAgain.length; i++) {
    mediumResult.push(Math.pow(numbersAgain[i], 2).toString());
  }

  let joined = mediumResult.join("");
  return parseInt(joined);

}

console.log(squareDigits(3212));