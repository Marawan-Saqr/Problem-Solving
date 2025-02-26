function duplicateCount(text) {

  if (text === "") {
    return 0;
  }

  let sorted = text.toLowerCase().split("").sort().join("");  // "aaabbcde"
  let counter = 0;
  let isFound = false;

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      if (isFound === false) {
        counter++;
        isFound = true;
      }
    }
    else if (sorted[i] !== sorted[i + 1]) {
      isFound = false;
    }
  }

  return counter;


}




console.log(duplicateCount("Indivisibilities"));