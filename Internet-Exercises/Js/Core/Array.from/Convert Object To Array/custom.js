function convertObjectToArray(object) {

  let newArray = Array.from(object);
  return newArray;

}


console.log(convertObjectToArray({
  0: 'x',
  1: 'y',
  2: 'z',
  length: 3
}));