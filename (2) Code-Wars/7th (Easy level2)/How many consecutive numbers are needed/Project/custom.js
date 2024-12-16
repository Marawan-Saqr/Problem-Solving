function consecutive(array) {

  let minNumber = Math.min(...array);
  let maxNumber = Math.max(...array);

  let fullNumbers = [];
  for (let i = minNumber; i <= maxNumber; i++) {
    fullNumbers.push(i);   // [4, 5, 6, 7, 8]
  }


  let result = [];
  for (let i = 0; i < fullNumbers.length; i++) {
    if (!array.includes(fullNumbers[i])) {
      result.push(fullNumbers[i])
    }
  }

  return result.length;

}


console.log(consecutive([4, 8, 6]));