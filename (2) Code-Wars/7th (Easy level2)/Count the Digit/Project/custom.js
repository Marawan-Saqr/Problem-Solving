function nbDig(n, d) {

  let result = 0;

  for (let i = 0; i <= n; i++) {
    let double = i * i;
    let stringed = double.toString();
    for (let j = 0; j < stringed.length; j++) {
      if (stringed[j] === d.toString()) {
        result++;
      }
    }
  }

  return result;

}



console.log(nbDig(5750, 0));