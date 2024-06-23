function removeEveryOther(arr){

  let result = [];

  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }

  return result;

}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));