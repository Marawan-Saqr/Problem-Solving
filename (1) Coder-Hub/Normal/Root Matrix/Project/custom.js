function array_root(arr) {

  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(Math.sqrt(arr[i]));
  }

  return newArray;

}

console.log(array_root([4, 81, 49]));

//////////////////////////////////////////Another Solution//////////////////////////////////////////

function array_root(arr) {

  let result = arr.map(function(element) {
    return Math.sqrt(element);
  })

  return result;

}

console.log(array_root([4, 81, 49]));