function gimme(triplet) {

  let minNumber = Math.min(...triplet);
  let maxNumber = Math.max(...triplet);

  for (let i = 0; i < triplet.length; i++) {
    if (triplet[i] === minNumber || triplet[i] === maxNumber) {
      continue;
    } else {
      return triplet.indexOf(triplet[i]);
    }
  }

}


console.log(gimme([5, 6, 6]));