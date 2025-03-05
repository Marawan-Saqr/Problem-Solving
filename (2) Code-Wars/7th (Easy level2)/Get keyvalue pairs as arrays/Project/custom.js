function keysAndValues(data) {

  let keys = [];
  let values = [];
  let result = [];

  for (let obj in data) {
    keys.push(obj);
    values.push(data[obj]);
  }

  result.push(keys, values);
  return result;

}



console.log(keysAndValues({a: 1, b: 2, c: 3}));