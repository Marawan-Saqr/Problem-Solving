function most_frequent_element(arr) {
  let uniqueElements = new Set(arr);
  let mostFrequent = null;
  let maxCount = 0;

  uniqueElements.forEach(element => {
      let count = arr.filter(el => el === element).length;

      if (count > maxCount) {
          mostFrequent = element;
          maxCount = count;
      }
  });

  return mostFrequent;
}

let arr = [13, 2, 1, 2, 10, 2, 1, 1, 2, 2];
console.log(most_frequent_element(arr));