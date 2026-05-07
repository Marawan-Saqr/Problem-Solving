function evenNumbers(array, number) {

  let result = array.filter((element)=> {
    return element % 2 === 0;
  });

  return result.slice(-number);

}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));