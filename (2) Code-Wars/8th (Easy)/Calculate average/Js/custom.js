function findAverage(array) {
  
  if (array.length === 0) {
    return 0;
  } else {
    let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }

  return result / array.length;
  }

}



console.log(findAverage([]));




