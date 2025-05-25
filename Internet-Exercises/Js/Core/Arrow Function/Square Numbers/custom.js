const squareNumbers = (array)=> {

  let result = array.map((element)=> {
    return Math.pow(element, 2);
  })

  return result;

}


console.log(squareNumbers([1, 2, 3, 4, 5]));