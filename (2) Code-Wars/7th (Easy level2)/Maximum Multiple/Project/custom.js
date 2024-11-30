function maxMultiple(divisor, bound){

  let result = 0;
  for (let i = divisor; i <= bound; i++) {
    if ((i % divisor === 0) && (i < bound || i === bound)) {
      result = i;
    }
  }

  return result;

}




console.log(maxMultiple(3, 10));