function smallest_number(arr) {
  let theGreatNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (theGreatNumber < arr[i]) {
      continue;
    } else {
      theGreatNumber = arr[i];
    }
  }
  return theGreatNumber;
}


console.log(smallest_number([13, 2, 1, 4, 106]));