function sumArrays(Arr1, Arr2) {
  let one = 0;
  let two = 0;
  let result = 0;
  for (let i = 0; i < Arr1.length; i++) {
    one += Arr1[i];
  }
  for (let j = 0; j < Arr2.length; j++) {
    two += Arr2[j];
  }
  result = one + two;
  return result;
}

console.log(sumArrays([3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2], [9, 2, 42, 55, 71, 22, 4, 5,  90, 25, 26]));