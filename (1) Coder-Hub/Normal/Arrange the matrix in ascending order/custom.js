function sort_array(elements_array) {
  let newArray = [];
  while (elements_array.length > 0) {
    let smallestIndex = 0;
    for (let i = 1; i < elements_array.length; i++) {
      if (elements_array[i] < elements_array[smallestIndex]) {
        smallestIndex = i;
      }
    }
    newArray.push(elements_array.splice(smallestIndex, 1)[0]);
  }
  return newArray;
}

console.log(sort_array([100, 23, 200, 23, 1]));
