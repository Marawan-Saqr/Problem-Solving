function arrAdder(arr) {

  let result = "";

  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result += arr[j][i];
    }
    result += " ";
  }

  return result.trim();

}


console.log(arrAdder([
  ['J','L','L','M'],
  ['u','i','i','a'],
  ['s','v','f','n'],
  ['t','e','e','']
]));