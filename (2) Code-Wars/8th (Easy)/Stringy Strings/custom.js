function stringy(size) {
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  return result;
}



console.log(stringy(2));