function sumOfIntegersInString(s) {

  let numbersOnly = s.match(/\d+/g);

  if (numbersOnly === null) {
    return 0;
  }

  let result = numbersOnly.map((element)=> {
    return Number(element);
  }).reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}



console.log(sumOfIntegersInString("ade approximately 1 million in gross revenue last quarter"));