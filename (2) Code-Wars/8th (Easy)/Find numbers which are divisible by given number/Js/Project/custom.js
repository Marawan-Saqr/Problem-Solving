function divisibleBy(numbers, divisor){

  let result = numbers.filter((element)=> {
    return element % divisor === 0;
  });

  return result;

}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2));