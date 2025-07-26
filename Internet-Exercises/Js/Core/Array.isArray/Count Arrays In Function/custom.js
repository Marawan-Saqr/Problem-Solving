function countArrays(arr) {

  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      counter++;
    }
  }

  return counter;

}


console.log(countArrays([1, [2], "hi", [], {}, [5,6]]));