function add_five(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr === []) {
      return arr;
    } else {
      newArray.push(`${arr[i]}5`)
    }
  }
  return newArray;
}


console.log(add_five(['code', 'c']));















