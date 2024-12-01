function clearTheSet(arrayOfColors) {

  let uniqueElements = new Set(arrayOfColors);
  uniqueElements.clear();
  return uniqueElements;

}


console.log(clearTheSet(["red", "blue", "green"]));