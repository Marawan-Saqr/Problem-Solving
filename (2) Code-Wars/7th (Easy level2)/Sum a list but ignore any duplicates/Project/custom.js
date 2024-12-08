function sumNoDuplicates(numList) {

  let uniqueElements = numList.filter((item, index, array)=> {
    return array.indexOf(item) === array.lastIndexOf(item);
  })


  let result = 0;
  for (let i = 0; i < uniqueElements.length; i++) {
    result += uniqueElements[i];
  }

  return result;


}



console.log(sumNoDuplicates([1, 10, 3, 10, 10]));