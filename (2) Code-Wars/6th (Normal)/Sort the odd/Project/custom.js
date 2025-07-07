function sortArray(array) {

  let filterOdd = array.filter((element)=> {
    return element % 2 !== 0;
  }).sort((a, b)=> {
    return a - b;
  })


  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      array[i] = filterOdd.shift();
    }
  }


  return array;

}



console.log(sortArray([5, 3, 2, 8, 1, 4]));