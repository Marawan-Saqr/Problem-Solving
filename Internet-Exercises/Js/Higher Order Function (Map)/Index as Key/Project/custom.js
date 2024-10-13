function convertToBinary(arr) {

  let result = arr.map((element, index, array) => {
    let finalResult = element.toString(2);
    return finalResult;
  })

  return result;

}

console.log(convertToBinary([5, 7, 10]));