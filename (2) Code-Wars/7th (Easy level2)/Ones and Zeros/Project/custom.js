const binaryArrayToNumber = arr => {

  let joined = arr.join("");

  return parseInt(joined, 2);

}


console.log(binaryArrayToNumber([0, 0, 1, 0]));