function max_element(arr) {
  let theGreatNumber = arr[0];
  for (let i = 1; i < arr.length; i++) {
  if (theGreatNumber > arr[i]) {
    continue;
  } else {
    theGreatNumber = arr[i];
  }
}
  return theGreatNumber;
}

console.log(max_element([1, 2, 3, 4, 5, 1000]));