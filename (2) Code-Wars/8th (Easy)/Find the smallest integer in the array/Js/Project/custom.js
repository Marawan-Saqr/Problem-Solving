function findSmallestInt(arr) {

  let smallNumber = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (smallNumber > arr[i]) {
      smallNumber = arr[i];
    }
  }

  return smallNumber;

}

console.log(findSmallestInt([34, 15, 88, 2]));