function hasValue(obj, value) {

  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    }
  }

  return false;

}


console.log(hasValue({ a: 5, b: 10, c: 15 }, 10));