function mostFrequentItemCount(collection) {

  if (collection.length === 0) {
    return 0;
  }

  let numberCounted = [];
  for (let i = 0; i < collection.length; i++) {
    let counter = 0;
    for (let j = 0; j < collection.length; j++) {
      if (collection[i] === collection[j]) {
        counter++;
      }
    }
    numberCounted.push(counter);
  }

  let uniqueNumbers = [...new Set(numberCounted)];
  return Math.max(...uniqueNumbers);

}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));