function sumNumericValues(obj) {

  let result = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      result += obj[key];
    }
  }

  return result;

}

console.log(sumNumericValues({ a: 5, b: "hello", c: 10, d: 3 }));