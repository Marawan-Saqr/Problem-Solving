function oddsVsEvens(num) {

  let stringed = num.toString().split("");

  let numbered = stringed.map(function(element) {
    return Number(element);
  })

  let evenResult = 0;
  let oddResult = 0;

  for (let i = 0; i < numbered.length; i++) {
    if (numbered[i] % 2 === 0) {
      evenResult += numbered[i];
    } else {
      oddResult += numbered[i];
    }
  }


  if (evenResult > oddResult) {
    return "even";
  } else if (evenResult < oddResult) {
    return "odd";
  } else {
    return "equal";
  }


}

console.log(oddsVsEvens(26341));