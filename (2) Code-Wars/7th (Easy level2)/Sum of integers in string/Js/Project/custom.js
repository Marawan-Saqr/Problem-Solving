function sumOfIntegersInString(s) {

  let numbers = s.match(/\d+/g);

  if (numbers === null) {
    return 0;
  }
  
  let result = numbers.reduce((acc, current)=> {
    return Number(acc) + Number(current);
  }, 0)

  return result;

}



console.log(sumOfIntegersInString("Dogs are our best friends."));