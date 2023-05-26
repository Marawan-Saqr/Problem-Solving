function sumArrays(Arr1, Arr2) {
  let newArray = [];
  let result = 0;
  for (let i = 0; i < Arr1.length; i++) {
    result = Arr1[i] + Arr2[i];
    newArray.push(result);
  }
  return newArray;
}

console.log(sumArrays([4, 6, 7], [8, 1, 9]));
