function countProperties(obj) {
  let counter = 0;
  for (let key in obj) {
    counter++;
  }
  return counter;
}


console.log(countProperties({ a: 1, b: 2, c: 3 }));