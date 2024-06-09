function invert(array) {

  let newArray = [];


  for (let i = 0; i < array.length; i++) {
    newArray.push(-array[i])
  }

  return newArray;

}

console.log(invert([1, -2, 3, -4, 5]));