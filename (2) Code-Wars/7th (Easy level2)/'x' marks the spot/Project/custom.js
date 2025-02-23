function xMarksTheSpot(matrix) {

  if (matrix.length === 0) {
    return [];
  }


  let foundIndex = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "x") {
        foundIndex.push(i);
        foundIndex.push(j);
        counter++;
      }
    }
  }

  if (counter < 1 || counter > 1 ) {
    return [];
  } else {
    return foundIndex;
  }

}

console.log(xMarksTheSpot([
  ['o', 'o'],
  ['o', 'x']
]
));