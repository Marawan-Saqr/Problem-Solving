function getEvenNumbers(numbersArray){

  let result = numbersArray.filter((e)=> {
    return e % 2 === 0;
  })

  return result;

}


console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));