function sub_arrays(arr1, arr2) {

  let newArray = arr1.map(function(element, index) {
    return element - arr2[index];
  });

  return newArray;

}

console.log(sub_arrays([2, 4, 88], [4, 2, 88]));