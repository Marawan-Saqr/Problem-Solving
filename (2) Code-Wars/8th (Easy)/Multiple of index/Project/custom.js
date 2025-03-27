function multipleOfIndex(array) {

  let result = array.filter((element, index)=> {
    if (index === 0 && element === 0) {
      return 1;
    } else {
      return element % index === 0;
    }
  })

  return result;

}


console.log(multipleOfIndex([22, -6, 32, 25]));