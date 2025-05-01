function sub_arrays(arr1, arr2) {

  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr2[i] - arr1[i]);
  }

  return result;

}

console.log(sub_arrays([2, 4, 88], [4, 2, 88]));