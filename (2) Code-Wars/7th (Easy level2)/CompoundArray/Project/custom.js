function compoundArray(a, b) {

  let longest = Math.max(a.length, b.length);
  let result = [];


  for (let i = 0; i < longest; i++) {
    let numberOne = a[i];
    let numberTwo = b[i];
    result.push(numberOne, numberTwo);
  }

  let finalResult = result.filter((element)=> {
    return element !== undefined;
  })

  return finalResult;

}


console.log(compoundArray([0, 12], [21, 22, 23, 24]));