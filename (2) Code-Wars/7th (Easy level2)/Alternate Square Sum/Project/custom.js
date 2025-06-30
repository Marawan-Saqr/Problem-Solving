function alternateSqSum(arr){

  if (arr.length === 0) {
    return 0;
  }


  let evenPositions = [];
  for (let i = 0; i < arr.length; i++) {
    if ((i + 1) % 2 === 0) {
      evenPositions.push(Math.pow(arr[i], 2));
    } else {
      evenPositions.push(arr[i]);
    }
  }

  let result = evenPositions.reduce((acc, current)=> {
    return acc + current;
  }, 0);

  return result;

}



console.log(alternateSqSum([11, 12, 13, 14, 15]));