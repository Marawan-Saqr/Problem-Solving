function swapKeysAndValues(obj) {

  let newObject = {};
  for (let key in obj) {
    let newValue = obj[key];
    newObject[newValue] = key;
  }

  return newObject;

}

console.log(swapKeysAndValues({ a: 1, b: 2, c: 3 }));