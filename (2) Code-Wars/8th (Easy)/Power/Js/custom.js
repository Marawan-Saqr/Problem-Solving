function numberToPower(number, power){

  let result = 1;

  for (let i = 1; i <= power; i++) {
    result *= number;
  }

  return result;

}

console.log(numberToPower(4, 2));