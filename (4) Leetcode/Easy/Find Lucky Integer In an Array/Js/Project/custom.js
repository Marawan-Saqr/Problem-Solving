var findLucky = function(arr) {

  const uniqueElements = new Set(arr);
  
  let largestLucky = -1;

  for (let num of uniqueElements) {
    const frequency = arr.filter(x => x === num).length;
    if (num === frequency) {
      largestLucky = Math.max(largestLucky, num);
    }
  }

  return largestLucky;

};

console.log(findLucky([2, 2, 3, 3, 3, 4]));
