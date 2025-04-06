function multiplyAll(array) {

  return function small(number) {
    let result = array.map((element)=> {
      return element * number;
    })
    return result;
  }

}



console.log(multiplyAll([1, 2, 3])(2));