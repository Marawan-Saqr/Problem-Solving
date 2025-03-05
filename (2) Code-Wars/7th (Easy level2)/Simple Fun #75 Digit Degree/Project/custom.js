function digitDegree(n) {

  let stringed = n.toString();

  if (stringed.length === 1) {
    return 0;
  }


  let counter = 0;
  let finalResult = 0;


  while (stringed.toString().length !== 1) {
    finalResult = stringed.toString().split("").reduce((acc, current)=> {
      return Number(acc) + Number(current);
    }, 0)
    stringed = finalResult;
    counter++;
  }

  return counter;

}


console.log(digitDegree(99));