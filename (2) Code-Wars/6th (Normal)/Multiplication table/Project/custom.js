function multiplicationTable(size) {

  let result = [];
  for (let i = 1; i <= size; i++) {
    let row = [];
    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }
    result.push(row);
  }

  return result;

}


console.log(multiplicationTable(3));