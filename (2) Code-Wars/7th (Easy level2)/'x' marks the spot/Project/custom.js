function xMarksTheSpot(matrix) {

  if (matrix.length === 0) {
    return [];
  }


  let indexArray = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 'x') {
        indexArray.push(i);
        indexArray.push(j);
        counter++;
      }
    }
  }

  if (counter > 1 || counter < 1) {
    return [];
  } else if (counter === 1) {
    return indexArray;
  }

}

console.log(xMarksTheSpot([
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o'],
  ['o', 'o', 'o', 'o', 'o', 'o', 'o', 'o']]));