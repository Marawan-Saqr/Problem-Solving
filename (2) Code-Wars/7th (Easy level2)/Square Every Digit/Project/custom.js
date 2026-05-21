function squareDigits(num){

  let stringed = num.toString().split("").map((element)=> {
    return Number(Math.pow(element, 2));
  });

  return Number(stringed.join(""));

}

console.log(squareDigits(3212));