function most_frequent_element(arr) {
  let elementCount = {};
  let maxElement;
  let maxCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentElement = arr[i];
    if (elementCount[currentElement] === undefined) {
      elementCount[currentElement] = 1;
    } else {
      elementCount[currentElement]++;
    }

    if (elementCount[currentElement] > maxCount) {
      maxElement = currentElement;
      maxCount = elementCount[currentElement];
    }
  }

  return maxElement;
}


console.log(most_frequent_element([13, 2, 1, 2, 10, 2, 1, 1, 2, 2]));


