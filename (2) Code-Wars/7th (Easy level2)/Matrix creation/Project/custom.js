function getMatrix(number) {
  let result = [];

  for (let i = 0; i < number; i++) {
    result.push([]);
    for (let j = 0; j < number; j++) {
      result[i].push(i === j ? 1 : 0);
    }
  }

  return result;

}

console.log(getMatrix(2));
