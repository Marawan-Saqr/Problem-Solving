function most_frequent_element(arr) {

  let sortedArray = arr.sort((a, b) => a - b);
  let counter = 1;
  let maxCount = 1;
  let mostFrequent = sortedArray[0];

  for (let i = 1; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      counter++;
    } else {
      counter = 1;
    }

    if (counter > maxCount) {
      maxCount = counter;
      mostFrequent = sortedArray[i];
    }
  }

  return mostFrequent;

}

console.log(most_frequent_element([1, 6, 4, 3, 3, 3, 2, 3, 4, 5, 3, 4])); 