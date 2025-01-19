function mostFrequentItemCount(collection) {

  if (collection.length === 0) return 0;

  const uniqueItems = new Set(collection); // {3, -1, 2, 4, 9}
  let maxCount = 0;

  uniqueItems.forEach(item => {
    const itemCount = collection.filter(x => x === item).length;
    if (itemCount > maxCount) {
      maxCount = itemCount;
    }
  });

  return maxCount;
}

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));