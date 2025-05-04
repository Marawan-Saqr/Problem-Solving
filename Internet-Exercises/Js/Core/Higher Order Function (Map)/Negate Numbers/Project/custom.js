function negateNumbers(arr) {

  let result = arr.map((element, index, array) => {
    let finalResult = -element;
    return finalResult;
  })

  return result;

}

console.log(negateNumbers([1, -2, 3]));