function sortArray(array) {

  let oddNumbers = array.filter((element)=> {
    return element % 2 !== 0;
  }).sort((a, b)=> {
    return  a - b;
  })


  let index = 0;
  let finalResult =  array.map((element)=> {
    return element % 2 !== 0 ? oddNumbers[index++] : element;
  })

  return finalResult;

}



console.log(sortArray([5, 3, 2, 8, 1, 4]));