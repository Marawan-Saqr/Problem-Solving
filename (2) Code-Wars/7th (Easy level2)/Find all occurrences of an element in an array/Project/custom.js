const findAll = (array, n) => {

  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      result.push(i);
    }
  }


  return result;

}



console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));