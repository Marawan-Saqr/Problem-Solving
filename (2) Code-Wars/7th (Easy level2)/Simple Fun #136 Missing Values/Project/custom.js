function missingValues(arr) {

  let obj = {};
  for (let number of arr) {
    if (obj[number]) {
      obj[number]++;
    } else {
      obj[number] = 1;
    }
  }


  let x = 0;
  let y = 0;
  for (let number in obj) {
    if (obj[number] === 1) {
      x = number;
    } else if (obj[number] === 2) {
      y = number;
    }
  }

  return x * x * y;

}



console.log(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]));