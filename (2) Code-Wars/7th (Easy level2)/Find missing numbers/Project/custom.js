function findMissingNumbers(arr){

  let minNumber = Math.min(...arr);
  let maxNumber = Math.max(...arr);

  let missing = [];
  for (let i = minNumber; i <= maxNumber; i++) {
    missing.push(i);
  }


  let result = [];
  for (let i = 0; i < missing.length; i++) {
    if (!arr.includes(missing[i])) {
      result.push(missing[i]);
    }
  }

  return result;

}


console.log(findMissingNumbers([-3, -2, 1, 4]));