function findMissingNumbers(arr){

  let sorted = arr.sort((a, b)=> a - b);
  let start = sorted[0];
  let end = sorted[sorted.length - 1];
  let result = [];

  for (let i = start; i <= end; i++) {
    if (!sorted.includes(i)) {
      result.push(i);
    }
  }


  return result;

}


console.log(findMissingNumbers([-3, -2, 1, 4]));