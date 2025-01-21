function countRedBeads(n) {

  if (n === 1) {
    return 0;
  }

  let redCounter = 0;

  for (let i = 1; i <= n; i++) {
    if (i !== n - 1) {
      redCounter += 2;
    }
  }

  return redCounter;

}



console.log(countRedBeads(1));