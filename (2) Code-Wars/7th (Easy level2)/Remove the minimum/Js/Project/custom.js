function removeSmallest(numbers) {

  if (numbers.length === 0) {
    return [];
  }

  let minNumber = Math.min(...numbers);
  let index = numbers.indexOf(minNumber);


  let result = numbers.filter((element, i)=> {
    return i !== index;
  });

  return result;

}

console.log(removeSmallest([96, 288, 86, 81, 153, 102, 324, 341, 248, 286, 36, 11, 33, 17, 198, 193, 354]));