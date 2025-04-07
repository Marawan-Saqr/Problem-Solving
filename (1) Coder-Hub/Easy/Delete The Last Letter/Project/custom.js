function deleteLastChar(word) {

  let sliced = word.slice(0, -1);
  return sliced;

}

console.log(deleteLastChar("CoderHub"));