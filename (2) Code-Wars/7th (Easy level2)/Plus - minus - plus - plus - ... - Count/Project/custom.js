function catchSignChange(arr) {

  if (arr.length === 0) {
    return 0;
  }

  let counter = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < 0 && arr[i + 1] >= 0) {
      counter++;
    } else if (arr[i] >= 0 && arr[i + 1] < 0) {
      counter++;
    }
  }

  return counter;

}



console.log(catchSignChange([1, -3, -4, 0, 5]));