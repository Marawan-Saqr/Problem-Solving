function sumArray(array) {

  if (array == null) {
    return 0;
  } else if (array.length <= 2) {
    return 0;
  }

  let sorted = array.sort((a, b)=> a - b);
  let result = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (i !== 0 && i !== sorted.length - 1) {
      result += sorted[i];
    }
  }

  return result;

}


console.log(sumArray(null));