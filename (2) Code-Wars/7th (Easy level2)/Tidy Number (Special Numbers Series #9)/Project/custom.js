function tidyNumber(n) {

  let stringed = n.toString();
  for (let i = 0; i < stringed.length - 1; i++) {
    if (!(stringed[i] <= stringed[i + 1])) {
      return false;
    }
  }

  return true;

}



console.log(tidyNumber(12));